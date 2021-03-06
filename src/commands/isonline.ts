import { Bot, Context } from 'grammy'
import { isAdmin } from "@/middlewares/chatBehavior"

export default (bot: Bot<Context>): void => {
  bot.command('isonline', isAdmin, (ctx: Context) =>
		ctx.reply('🟢 *The bot is online*', {
			parse_mode: 'MarkdownV2'
		})
  )
}
