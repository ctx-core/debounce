import { clone } from '@ctx-core/object'
import { ensuredebounce_table } from './ensuredebounce_table'
import { assign_debounce_finish } from './assign_debounce_finish'
import { debounce_finish } from './debounce_finish'
export async function debounce(ctx, ...opt_a1: debounce_opt_type[]) {
	const opts = clone(...opt_a1)
	const { key, no, yes } = opts
	ensuredebounce_table(ctx)
	const { debounce_table } = ctx
	if (debounce_table[key]) {
		return await no()
	}
	try {
		assign_debounce_finish(ctx, key)
		return await yes()
	} finally {
		debounce_finish(ctx, key)
	}
}
export interface debounce_opt_type {
	key:string
	yes():Promise<void>
	no():Promise<void>
}
