declare type Item = {
    value: unknown;
    expires?: number;
};
export declare function clear(): void;
export declare function remove(key: string): void;
export declare function get(key: string): Item['value'];
export declare function set(key: string, value: Item['value'], expires: Item['expires']): void;
declare const _default: {
    clear: typeof clear;
    remove: typeof remove;
    get: typeof get;
    set: typeof set;
};
export default _default;
