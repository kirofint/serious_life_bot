import { Context } from 'grammy'

export function isAdmin (ctx: Context, next: () => any) {
	if (ctx.from.id === Number.parseInt(process.env.ADMIN_ID)) return next()
}

export function isGroup (ctx: Context, next: () => any) {
	if (['group', 'supergroup'].includes(ctx.chat?.type)) return next()
}
