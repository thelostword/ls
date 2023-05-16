
declare type Option = {
  expires?: number;
  encrypt?: boolean;
}

export declare const encrypt: (str: string) => string;
export declare const decrypt: (str: string) => string;

export declare const set: (key: string, value: unknown, option?: Option) => void;
export declare const get: (key: string, isRaw?: boolean) => unknown;
export declare const remove: (key: string) => void;
export declare const clear: () => void;
export declare const setPrefix: (prefix: string) => void;
