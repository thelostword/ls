/*
 * @Author: losting
 * @Date: 2022-04-01 16:05:12
 * @LastEditTime: 2022-08-02 12:27:44
 * @LastEditors: thelostword
 * @Description:
 * @FilePath: \ls\src\index.ts
 */
import * as rsa from './rsa';

type StorageItemType = {
  value: unknown,
  expires?: number,
  encrypt?: boolean,
};

type GetItemOptionsType = {
  type: 'localStorage' | 'sessionStorage',
};

type SetItemOptionsType = GetItemOptionsType & {
  expires?: number,
  encrypt?: boolean,
};

export const config: SetItemOptionsType & { prefix: string } = {
  type: 'localStorage',
  expires: 0,
  encrypt: false,
  prefix: 'MOE__',
};

const defaultGetStorageItem: GetItemOptionsType = {
  type: config.type,
};
const defaultSetStorageItem: SetItemOptionsType = {
  type: config.type,
  expires: config.expires,
  encrypt: config.encrypt,
};

// localStorage key值校验
const checkKey = (key: string) => {
  if (typeof key !== 'string') {
    throw new TypeError('key must be a string');
  }
  if (key.length === 0) {
    throw new TypeError('key must not be empty');
  }
};

const byteLength = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 0x007f) {
      count += 1;
    } else if (charCode <= 0x07ff) {
      count += 2;
    } else if (charCode <= 0xffff) {
      count += 3;
    } else {
      count += 4;
    }
  }
  return count;
};

// 清空localStorage
export const clear = ({ type = config.type }: GetItemOptionsType = defaultGetStorageItem) => {
  (window || globalThis)[type].clear();
};

/**
 * 删除指定key的localStorage
 * @param key 要删除的localStorage的key值
 */
export const remove = (
  key: string,
  { type = config.type }: GetItemOptionsType = defaultGetStorageItem,
) => {
  checkKey(key);
  (window || globalThis)[type].removeItem(`${config.prefix}${key}`);
};

/**
 * 获取localStorage
 * @param key 要查询的localStorage的key值
 * @param options 选项
 * @returns localStorage value
 */
export const get = (
  key: string,
  { type = config.type }: GetItemOptionsType = defaultGetStorageItem,
): unknown => {
  checkKey(key);
  const itemStr = (window || globalThis)[type].getItem(`${config.prefix}${key}`);
  if (!itemStr) return undefined;
  const item: StorageItemType = JSON.parse(itemStr);
  if (item.expires && item.expires < Date.now()) {
    remove(`${config.prefix}${key}`);
    return undefined;
  }
  if (item.encrypt) return rsa.decrypt(item.value);
  return item.value;
};

/**
 * 设置localStorage
 * @param key 要设置的localStorage的key值
 * @param value localStorage value
 * @param options 设置localStorage的配置项
 */
export const set = (
  key: string,
  value: unknown,
  { expires = config.expires, encrypt = config.encrypt, type = config.type }
  : SetItemOptionsType = defaultSetStorageItem,
) => {
  checkKey(key);
  if (encrypt && typeof value === 'object') throw new TypeError('encrypt value not support object');
  if (encrypt && byteLength(value) > 117) throw new TypeError('encrypt value too long');
  const item = {
    value: (encrypt && value) ? rsa.encrypt(value) : value,
    expires: expires ? Date.now() + expires : 0,
    encrypt,
  };
  (window || globalThis)[type].setItem(`${config.prefix}${key}`, JSON.stringify(item));
};

// 判断当前环境是否支持localStorge
export const isSupported = () => {
  if ('localStorage' in (window || globalThis)) return true;
  return false;
};
