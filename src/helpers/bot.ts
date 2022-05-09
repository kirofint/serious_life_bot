import { Bot } from 'grammy'
import logger from './logger'
import commandIsOnline from '@/commands/isOnline'
import commandYearProgress from '@/commands/yearProgress'
import { isGroup } from '@/middlewares/chatBehavior'

const bot = new Bot(process.env.TOKEN)
bot.catch(logger)

// check a bot status. For admin only
commandIsOnline(bot)

/** only for groups */
bot.use(isGroup)

bot.api.setMyCommands([
	{ command: 'yearprogress', description: '🔜' },
])

commandYearProgress(bot)

export default bot
