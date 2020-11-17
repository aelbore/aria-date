

export function getMonths(range: number, date?: Date) {
  const currentDate = date || new Date()

  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const day = currentDate.getDate() 

  const rangeMonth = month + range
  const rangeYear = rangeMonth > 11 ? (year + 1): year

  const months = []
  for (let i = month; i < rangeMonth; i++) {
    if (i <= 11) {
      months.push(new Date(year, i, day))
    }
    if (i > 11) {
      months.push(new Date(rangeYear, (i - 11), day))
    }
  }

  return months
}