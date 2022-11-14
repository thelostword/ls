/*
 * @Author: thelostword
 * @Date: 2022-11-11 17:35:26
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-14 15:23:29
 * @FilePath: \ls\src\main.ts
 */
import * as crypto from './crypto';

type StorageType = 'localStorage' | 'sessionStorage';

type GetStorageItemOption = {
  type?: StorageType;
  isRaw?: boolean;
}

type SetStorageItemOption = {
  type?: StorageType;
  value?: unknown;
  expires?: number;
  encrypt?: boolean;
}

type Config = {
  prefix?: string;
  secret?: string;
}

let PREFIX = globalThis.localStorage.getItem('LS_PREFIX') || 'MOE__';

export const customConfig = ({ prefix, secret }: Config) => {
  if (prefix) {
    PREFIX = prefix;
    globalThis.localStorage.setItem('LS_PREFIX', prefix);
  }
  if (secret) crypto.setSecretKey(secret);
}

// 清空localStorage
export const clear = (type?: StorageType) => {
  globalThis[type || 'localStorage'].clear();
};

/**
 * 删除指定key的localStorage
 * @param key 要删除的localStorage的key值
 */
export const remove = (key: string, option?: StorageType | { type: StorageType }) => {
  if (!!option) {
    if (typeof option === 'string') {
      globalThis[option].removeItem(`${PREFIX}${key}`);
      return;
    }
    if (typeof option === 'object') {
      globalThis[option.type].removeItem(`${PREFIX}${key}`);
      return;
    }
  }
  globalThis.localStorage.removeItem(`${PREFIX}${key}`);
};

/**
 * 获取localStorage
 * @param key 要查询的localStorage的key值
 * @param options 选项
 * @returns localStorage value
 */
export const get = (key: string, option?: GetStorageItemOption): unknown => {

  const itemStr = globalThis[option?.type || 'localStorage'].getItem(`${PREFIX}${key}`);

  if (!itemStr) return undefined;

  const item: SetStorageItemOption = JSON.parse(itemStr);

  if (item.expires && item.expires <= Date.now()) {
    remove(`${PREFIX}${key}`);
    return undefined;
  }

  if (item.encrypt && typeof item.value === 'string') item.value = crypto.decrypt(item.value);

  if (option?.isRaw) return item;

  return item.value;
};

/**
 * 设置localStorage
 * @param key 要设置的localStorage的key值
 * @param value localStorage value
 * @param options 设置localStorage的配置项
 */
export const set = (key: string, value: unknown, option?: SetStorageItemOption) => {
  let itemValue;
  let itemOption;
  if (typeof value === 'string') {
    itemValue = value;
    itemOption = option;
  } else {
    itemValue = (value as SetStorageItemOption).value;
    itemOption = value as SetStorageItemOption;
  }

  if (itemOption?.encrypt && typeof itemValue === 'object') throw new TypeError('encrypt value not support object');

  const item = {
    value: (itemOption?.encrypt && itemValue) ? crypto.encrypt(itemValue as string) : value,
    expires: itemOption?.expires ? Date.now() + itemOption.expires : undefined,
    encrypt: itemOption?.encrypt,
  };

  globalThis[itemOption?.type || 'localStorage'].setItem(`${PREFIX}${key}`, JSON.stringify(item));
};
