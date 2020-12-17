import { Writable } from '@ctx-core/store';
import type { maybe_null } from '@ctx-core/function';
export declare function debounce_table_b<I extends unknown = unknown>(ctx?: any): debounce_table_type<I>;
export interface $debounce_table_type extends Record<string, maybe_null<debounce_fn_type>> {
}
export interface debounce_table_type<I> extends Writable<$debounce_table_type> {
    debounce: (opts: {
        key: string;
        no: debounce_no_type<I>;
        yes: debounce_yes_type<I>;
    }) => Promise<I>;
}
export declare type debounce_fn_type = () => void;
export declare type debounce_no_type<I> = () => Promise<I>;
export declare type debounce_yes_type<I> = () => Promise<I>;
