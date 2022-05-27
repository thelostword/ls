declare type Item = {
    value: unknown;
    expires?: number;
};
export declare const clear: () => void;
export declare const remove: (key: string) => void;
export declare const get: (key: string) => Item['value'];
export declare const set: (key: string, value: Item['value'], expires: Item['expires']) => void;
declare const _default: {
    clear: () => void;
    remove: (key: string) => void;
    get: (key: string) => unknown;
    set: (key: string, value: unknown, expires: number | undefined) => void;
};
export default _default;
