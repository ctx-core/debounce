import { ensuredebounce_table } from './ensuredebounce_table'
export function assign_debounce_finish(ctx, key) {
	let debounce_table = ensuredebounce_table(ctx)
	debounce_table[key] = _debounce_finish(ctx, key)
	return ctx
}
function _debounce_finish(ctx, key) {
	return ()=>{
		ctx.debounce_table[key] = null
	}
}
