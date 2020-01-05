import { get, writable, Writable } from 'svelte/store'
import { _b, assign } from '@ctx-core/object'
export interface Writable__table__debounce extends Writable<any> {
	debounce:(opts:{ key:string, no:()=>any, yes:()=>any })=>Promise<any>
}
export const b__table__debounce = _b<Writable__table__debounce>('__table__debounce', ()=>{
	const __table__debounce = writable({})
	return assign(__table__debounce, {
		debounce,
	})
	async function debounce(opts) {
		const { key, no, yes } = opts
		const table__debounce = get(__table__debounce)
		if (table__debounce[key]) {
			return await no()
		}
		try {
			table__debounce[key] = ()=>table__debounce[key] = null
			return await yes()
		} finally {
			table__debounce[key]()
		}
	}
})
export const __table__debounce = b__table__debounce()
export const { debounce } = __table__debounce
