import { encrypt, decrypt } from './crypt';
export { encrypt, decrypt };

let PREFIX = localStorage.getItem('__LS_PREFIX__') || 'MOE_';

// 清空localStorage
export const clear = () => void localStorage.clear();

/**
 * 删除指定key的localStorage
 * @param { string } key 要删除的localStorage的key值
 */
export const remove = (key) => {
  if (!key) throw new Error('Missing key!');
  localStorage.removeItem(`${PREFIX}${key}`)
};

/**
 * 获取localStorage
 * @param { string } key 要查询的localStorage的key值
 * @param { boolean } isRaw 处理前的数据
 * @returns localStorage value
 */
export const get = (key, isRaw = false) => {
  if (!key) throw new Error('Missing key!');
  const dataStr = localStorage.getItem(`${PREFIX}${key}`);
  if (!dataStr) return undefined;
  const data = JSON.parse(dataStr);
  if (data.expires && data.expires <= Date.now()) {
    remove(`${PREFIX}${key}`);
    return undefined;
  }
  if (data.encrypt) {
    if (data.value === '' || data.value === null || data.value === undefined) {}
    else if (typeof data.value === 'string') data.value = decrypt(data.value);
    if (data.__isJson) data.value = JSON.parse(decrypt(data.value));
  }
  if (isRaw) return data;
  return data.value;
};

/**
 * 设置localStorage
 * @param { string } key 要设置的localStorage的key值
 * @param { string, number, object } value localStorage value
 * @param { object } options 设置localStorage的配置项
 */
export const set = (key, value, option) => {
  if (!key) throw new Error('Missing key!');
  let __isJson;
  const _value = () => {
    if (value === '' || value === null || value === undefined) return value;
    if (option?.encrypt) {
      if (typeof value === 'string') return encrypt(value);
      if (typeof value === 'object') {
        __isJson = true;
        return encrypt(JSON.stringify(value));
      }
    }
    return value;
  }
  const data = {
    value: _value(),
    expires: option?.expires ? Date.now() + option.expires : 0,
    encrypt: option?.encrypt,
    __isJson,
  }
  localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(data));
};

/**
 * 设置key前缀
 * @param { string } prefix 
 * @returns 
 */
export const setPrefix = (prefix) => {
  if (prefix === PREFIX) return;
  const oldKeyArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const oldKey = localStorage.key(i);
    const value = localStorage.getItem(oldKey);
    if (oldKey.startsWith(PREFIX)) {
      const newKey = oldKey.replace(new RegExp(`^${PREFIX}`), prefix);
      localStorage.setItem(newKey, value);
      oldKeyArr.push(oldKey);
    }
  }
  PREFIX = prefix;
  localStorage.setItem('__LS_PREFIX__', prefix);

  oldKeyArr.forEach((key) => {
    localStorage.removeItem(key);
  });
}
