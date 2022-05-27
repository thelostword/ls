/*
 * @Author: losting
 * @Date: 2022-04-01 16:05:12
 * @LastEditTime: 2022-05-27 10:01:12
 * @LastEditors: losting
 * @Description:
 * @FilePath: \ls\src\index.ts
 */

class Storage {
  #storage: globalThis.Storage;
  prefix: string;
  constructor(storage: globalThis.Storage = globalThis.localStorage, prefix: string = '') {
    this.#storage = storage;
    this.prefix = prefix.length ? `${prefix}__` : '';
  }

  get(key: string): any {
    if (!key) {
      throw new Error('key is required');
    }
    const itemStr = this.#storage.getItem(`${this.prefix}${key}`);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    if (item.expires && item.expires < Date.now()) {
      this.remove(`${this.prefix}_${key}`);
      return null;
    }
    return item.value;
  }

  set(key, value, expires) {
    if (!key) {
      throw new Error('key is required');
    }
    const item = {
      value,
      expires: expires ? Date.now() + expires : null,
    };
    this.#storage.setItem(`${this.prefix}_${key}`, JSON.stringify(item));
  }

  remove(key) {
    if (!key) {
      throw new Error('key is required');
    }
    this.#storage.removeItem(`${this.prefix}_${key}`);
  }
}

export default new Storage();
