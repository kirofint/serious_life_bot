import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import { Bot, Context } from 'grammy'
dayjs.extend(dayOfYear)

const getProgressOfYear = () => {
	const currentDayInTheYear = dayjs().dayOfYear()
	const daysInTheYear = dayjs().endOf('year').dayOfYear()

	const computedProgressPos = Math.floor(currentDayInTheYear / (daysInTheYear / 100))
	const progressBar = '▓'.repeat(computedProgressPos) + '░'.repeat(100 - computedProgressPos)

	const computedYearProgressPercent = Math.floor((currentDayInTheYear / daysInTheYear) * 100)

	return progressBar + ' ' + computedYearProgressPercent + '%'
}

export default (bot: Bot<Context>): void => {
	bot.command('yearprogress', (ctx: Context) => {
		ctx.reply(getProgressOfYear())
	})
}
