declare class Storage {
    #private;
    prefix: string;
    constructor(storage?: globalThis.Storage, prefix?: string);
    get(key: string): any;
    set(key: any, value: any, expires: any): void;
    remove(key: any): void;
}
declare const _default: Storage;
export default _default;
