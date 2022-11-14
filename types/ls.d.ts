/*
 * @Author: thelostword
 * @Date: 2022-11-11 17:25:00
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-14 16:29:44
 * @FilePath: \ls\types\ls.d.ts
 */
declare type StorageType = 'localStorage' | 'sessionStorage';
declare type GetStorageItemOption = {
  type?: StorageType;
  isRaw?: boolean;
};
declare type SetStorageItemOption = {
  type?: StorageType;
  value?: unknown;
  expires?: number;
  encrypt?: boolean;
}
declare type Config = {
  prefix?: string;
  secret?: string;
}
export declare const customConfig: (option: Config) => void;
export declare const clear: (type?: StorageType) => void;
export declare const remove: (key: string, option?: StorageType | { type: StorageType }) => void;
export declare const get: (key: string, option?: GetStorageItemOption) => unknown;
export declare const set: (key: string, value: unknown, option?: SetStorageItemOption) => void;
export {};
