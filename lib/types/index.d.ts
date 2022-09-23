declare type GetItemOptionsType = {
    type: 'localStorage' | 'sessionStorage';
};
declare type SetItemOptionsType = GetItemOptionsType & {
    expires?: number;
    encrypt?: boolean;
};
export declare const config: SetItemOptionsType & {
    prefix: string;
};
export declare const clear: (options?: GetItemOptionsType | undefined) => void;
export declare const remove: (key: string, options?: GetItemOptionsType | undefined) => void;
export declare const get: (key: string, options?: (GetItemOptionsType & {
    all: boolean;
}) | undefined) => unknown;
export declare const set: (key: string, value: unknown, options?: SetItemOptionsType | undefined) => void;
export declare const isSupported: () => boolean;
export {};
