import { get, writable, Writable } from '@ctx-core/store'
import { _b, assign } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
export function table_b__debounce<I extends unknown = unknown>(ctx?) {
	return _b<type__table__debounce<I>>('__table__debounce', ()=>{
		const __table__debounce = writable({}) as type__table__debounce<I>
		return assign(__table__debounce, {
			debounce,
		})
		async function debounce(opts) {
			const { key, no, yes } = opts
			const table__debounce = get<$type__table__debounce>(__table__debounce)
			if (table__debounce[key]) {
				return await no()
			}
			try {
				table__debounce[key] = (()=>{ table__debounce[key] = null })
				return await yes()
			} finally {
				if (table__debounce[key]) {
					(table__debounce[key] as debounce_fn_type)()
				}
			}
		}
	})(ctx)
}
export type $type__table__debounce = Record<string, maybe_null<debounce_fn_type>>
export interface type__table__debounce<I> extends Writable<$type__table__debounce> {
	debounce:(
		opts:{ key:string, no:debounce_no_type<I>, yes:debounce_yes_type<I> }
	)=>Promise<I>
}
export type debounce_fn_type = () => void
export type debounce_no_type<I> = ()=>Promise<I>
export type debounce_yes_type<I> = ()=>Promise<I>
