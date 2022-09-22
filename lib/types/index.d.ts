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
export declare const clear: ({ type }?: GetItemOptionsType) => void;
export declare const remove: (key: string, { type }?: GetItemOptionsType) => void;
export declare const get: (key: string, { type, all, }: {
    type?: "localStorage" | "sessionStorage" | undefined;
    all: any;
}) => unknown;
export declare const set: (key: string, value: unknown, { expires, encrypt, type }?: SetItemOptionsType) => void;
export declare const isSupported: () => boolean;
export {};
