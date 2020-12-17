export function debounce_finish(ctx, key) {
	return ctx.debounce_table[key]()
}
