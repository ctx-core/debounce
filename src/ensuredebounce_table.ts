import { assign } from '@ctx-core/object'
export function ensuredebounce_table(ctx) {
	if (!ctx.debounce_table) {
		assign(ctx, { debounce_table: {} })
	}
	return ctx.debounce_table
}
