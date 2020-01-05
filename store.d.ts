import { Writable } from 'svelte/store';
export interface Writable__table__debounce extends Writable<any> {
    debounce: (opts: {
        key: string;
        no: () => any;
        yes: () => any;
    }) => Promise<any>;
}
export declare const b__table__debounce: (ctx?: any, opts?: any) => Writable__table__debounce;
export declare const __table__debounce: Writable__table__debounce;
export declare const debounce: (opts: {
    key: string;
    no: () => any;
    yes: () => any;
}) => Promise<any>;
