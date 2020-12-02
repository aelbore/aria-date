export function datediff(start: Date, end: Date) {
  const startDate = new Date(start).setMinutes(start.getMinutes() - start.getTimezoneOffset())
  const endDate = new Date(end).setMinutes(end.getMinutes() - end.getTimezoneOffset())

  const millisecondsPerDay = 24 * 60 * 60 * 1000

  return (endDate - startDate) / millisecondsPerDay
}