import { _b, assign } from '@ctx-core/object'
import { get, Writable, writable } from '@ctx-core/store'
import type { maybe_null } from '@ctx-core/function'
export function debounce_table_b<I extends unknown = unknown>(ctx?) {
	return _b('debounce_table', ()=>{
		const debounce_table = writable({}) as debounce_table_type<I>
		return assign(debounce_table, {
			debounce,
		}) as debounce_table_type<I>
		async function debounce(opts) {
			const { key, no, yes } = opts
			const $debounce_table = get(debounce_table) as $debounce_table_type
			if ($debounce_table[key]) {
				return await no()
			}
			try {
				$debounce_table[key] = (()=>{ $debounce_table[key] = null })
				return await yes()
			} finally {
				if ($debounce_table[key]) {
					($debounce_table[key] as debounce_fn_type)()
				}
			}
		}
	})(ctx)
}
export interface $debounce_table_type extends Record<string, maybe_null<debounce_fn_type>> {}
export interface debounce_table_type<I> extends Writable<$debounce_table_type> {
	debounce:(
		opts:{ key:string, no:debounce_no_type<I>, yes:debounce_yes_type<I> }
	)=>Promise<I>
}
export type debounce_fn_type = ()=>void
export type debounce_no_type<I> = ()=>Promise<I>
export type debounce_yes_type<I> = ()=>Promise<I>
