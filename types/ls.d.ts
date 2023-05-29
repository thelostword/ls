export declare const encrypt: (str: string) => string;
export declare const decrypt: (str: string) => string;

export declare const set: (key: string, value: unknown, option?: { expires?: number, encrypt?: boolean }) => void;
export declare const get: (key: string, callback?: (data: {value: unknown, expires: number}) => unknown) => unknown;
export declare const remove: (key: string) => void;
export declare const clear: () => void;
export declare const setPrefix: (prefix: string) => void;
