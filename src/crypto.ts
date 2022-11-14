/*
 * @Author: thelostword
 * @Date: 2022-11-14 10:32:14
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-14 15:20:05
 * @FilePath: \ls\src\crypto.ts
 */
import CryptoJS from 'crypto-js';

const SECRET_KEY = '_losting_ls_secret_key_';
let SECRET = (globalThis as any)[SECRET_KEY] || 'sX0pB2LJ171dOfzu';

export const setSecretKey = (key: string) => {
  SECRET = key;
  (globalThis as any)[SECRET_KEY] = key;
}

export const encrypt = (data: string) => {
  return CryptoJS.AES.encrypt(data, SECRET).toString();
}

export const decrypt = (data: string) => {
  return CryptoJS.AES.decrypt(data, SECRET).toString(CryptoJS.enc.Utf8)
}
