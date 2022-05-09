import bot from './bot'

const ADMIN_ID = process.env.ADMIN_ID
let errorsToReport: string[] = []

async function sendLogToMessage (): Promise<void> {
  if (errorsToReport.length >= 1) {
    const chunks = []
    for (let numb = -1; errorsToReport.length > 0;) {
      const errPart = errorsToReport.shift()
      if (chunks[numb] && (chunks[numb].length + errPart.length <= 4000)) {
        chunks[numb] += "=".repeat(24) + '\r\n' + errPart
      } else
        chunks[++numb] = errPart
    }

		for (const chunk of chunks)
      await bot.api.sendMessage(ADMIN_ID, chunk)
  }
}

export default ({ stack }: Error): void => {
	if (!stack) return;

	const curDateTime = new Date().toLocaleString()
  errorsToReport.push(`[${curDateTime}] ${stack}\r\n`)
}

ADMIN_ID && setInterval(sendLogToMessage, +process.env.ERROR_MS_INTERVAL || 600000)
