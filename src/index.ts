/*
 * @Author: losting
 * @Date: 2022-04-01 16:05:12
 * @LastEditTime: 2022-05-27 15:11:10
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

// 清空localStorage
export function clear() {
  storage.clear();
}

/**
 * 删除指定key的localStorage
 * @param key 要删除的localStorage的key值
 */
export function remove(key: string) {
  if (!key) throw new Error('key is required');
  storage.removeItem(`${PREFIX}${key}`);
}

/**
 * 获取localStorage
 * @param key 要查询的localStorage的key值
 * @returns localStorage value
 */
export function get(key: string): Item['value'] {
  if (!key) throw new Error('key is required');
  const itemStr = storage.getItem(`${PREFIX}${key}`);
  if (!itemStr) return undefined;
  const item = JSON.parse(itemStr);
  if (item.expires && item.expires < Date.now()) {
    remove(`${PREFIX}${key}`);
    return undefined;
  }
  return item.value;
}

/**
 * 设置localStorage
 * @param key 要设置的localStorage的key值
 * @param value localStorage value
 * @param expires localStorage expires
 */
export function set(key: string, value: Item['value'], expires: number) {
  if (!key) throw new Error('key is required');
  const item: Item = {
    value: typeof value === 'object' ? JSON.stringify(value) : value,
    expires: expires ? Date.now() + expires : 0,
  };
  storage.setItem(`${PREFIX}${key}`, JSON.stringify(item));
}

export default {
  clear,
  remove,
  get,
  set,
};
