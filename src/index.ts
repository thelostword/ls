/*
 * @Author: losting
 * @Date: 2022-04-01 16:05:12
 * @LastEditTime: 2022-05-27 17:54:05
 * @LastEditors: losting
 * @Description:
 * @FilePath: \ls\src\index.ts
 */

type Item = {
  value: unknown,
  expires?: number,
};

const PREFIX = 'MOE__';
const storage = (window || globalThis).localStorage;

// localStorage key值校验
const checkKey = (key: string) => {
  if (typeof key !== 'string') {
    throw new TypeError('key must be a string');
  }
  if (key.length === 0) {
    throw new TypeError('key must not be empty');
  }
};

// 清空localStorage
export const clear = () => {
  storage.clear();
};

/**
 * 删除指定key的localStorage
 * @param key 要删除的localStorage的key值
 */
export const remove = (key: string) => {
  checkKey(key);
  storage.removeItem(`${PREFIX}${key}`);
};

/**
 * 获取localStorage
 * @param key 要查询的localStorage的key值
 * @returns localStorage value
 */
export const get = (key: string): Item['value'] => {
  checkKey(key);
  const itemStr = storage.getItem(`${PREFIX}${key}`);
  if (!itemStr) return undefined;
  const item: Item = JSON.parse(itemStr);
  if (item.expires && item.expires < Date.now()) {
    remove(`${PREFIX}${key}`);
    return undefined;
  }
  return item.value;
};

/**
 * 设置localStorage
 * @param key 要设置的localStorage的key值
 * @param value localStorage value
 * @param expires localStorage expires
 */
export const set = (key: string, value: Item['value'], expires: Item['expires']) => {
  checkKey(key);
  const item: Item = {
    value,
    expires: expires ? Date.now() + expires : 0,
  };
  storage.setItem(`${PREFIX}${key}`, JSON.stringify(item));
};

export default {
  clear,
  remove,
  get,
  set,
};
