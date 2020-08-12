import { assign, clone } from '@ctx-core/object'
export async function debounce(ctx, ...a1__opt) {
	const opts = clone(...a1__opt)
	const { key, no, yes } = opts
	ensure__table__debounce(ctx)
	const { table__debounce } = ctx
	if (table__debounce[key]) {
		return await no()
	}
	try {
		assign__finish__debounce(ctx, key)
		return await yes()
	} finally {
		finish__debounce(ctx, key)
	}
}
export function ensure__table__debounce(ctx) {
	if (!ctx.table__debounce) {
		assign(ctx, { table__debounce: {} })
	}
	return ctx.table__debounce
}
export function assign__finish__debounce(ctx, key) {
	let table__debounce = ensure__table__debounce(ctx)
	table__debounce[key] = _finish__debounce(ctx, key)
	return ctx
}
export function finish__debounce(ctx, key) {
	return ctx.table__debounce[key]()
}
function _finish__debounce(ctx, key) {
	return () => {
		ctx.table__debounce[key] = null
	}
}
