import { Writable } from '@ctx-core/store';
import type { maybe_null } from '@ctx-core/function';
export declare function b__table__debounce<I extends unknown>(ctx?: any): type__table__debounce<I>;
export declare type $type__table__debounce = Record<string, maybe_null<debounce_fn_type>>;
export interface type__table__debounce<I> extends Writable<$type__table__debounce> {
    debounce: (opts: {
        key: string;
        no: debounce_no_type<I>;
        yes: debounce_yes_type<I>;
    }) => Promise<I>;
}
export declare type debounce_fn_type = () => void;
export declare type debounce_no_type<I> = () => Promise<I>;
export declare type debounce_yes_type<I> = () => Promise<I>;
