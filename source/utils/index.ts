export function randomCode(size: number) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length: size }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('')
}

export function formatDateTime(date: any) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')

  return `${day}/${month}/${year} ${hour}:${minute}`
}

export function formatTimeRange(date: string): string {
  const currentDate = new Date()
  const [day, month, year, hours, minutes] = date.split(/[/: ]/).map(Number)

  const providedDate = new Date(year, month - 1, day, hours, minutes)
  const timeDiffInMilliseconds = currentDate.getTime() - providedDate.getTime()
  const timeDiffInSeconds = Math.floor(timeDiffInMilliseconds / 1000)
  const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60)

  if (timeDiffInSeconds < 60) {
    return `${timeDiffInSeconds}s`
  } else if (timeDiffInMinutes < 60) {
    return `${timeDiffInMinutes}m`
  } else {
    const timeDiffInHours = Math.floor(timeDiffInMinutes / 60)
    const timeDiffInDays = Math.floor(timeDiffInMinutes / (60 * 24))
    const timeDiffInWeeks = Math.floor(timeDiffInMinutes / (60 * 24 * 7))

    if (timeDiffInHours < 24) {
      return `${timeDiffInHours}h`
    } else if (timeDiffInDays < 7) {
      return `${timeDiffInDays}d`
    } else {
      return `${timeDiffInWeeks}w`
    }
  }
}
