export function getMonths(range: number, date?: Date) {
  const currentDate = date || new Date()

  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const rangeMonth = month + range
  const rangeYear = rangeMonth > 11 ? (year + 1): year

  const months = []
  for (let i = month; i < rangeMonth; i++) {
    if (i <= 11) {
      months.push(new Date(year, i, 1))
    }
    if (i > 11) {
      months.push(new Date(rangeYear, ((i - 11) - 1), 1))
    }
  }

  return months
}