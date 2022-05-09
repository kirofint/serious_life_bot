import { Bot, Context } from 'grammy'

export default (bot: Bot<Context>): void => {
  bot.command('yearprogress', (ctx: Context) =>
		ctx.reply('🟢 *The bot is online*', {
			parse_mode: 'MarkdownV2'
		})
  )
}
