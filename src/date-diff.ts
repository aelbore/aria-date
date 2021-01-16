export function datediff(start: Date | string | number, end: Date | string | number) {
  const _start = new Date(start), _end = new Date(end)

  const startDate = new Date(start).setMinutes(_start.getMinutes() - _start.getTimezoneOffset())
  const endDate = new Date(end).setMinutes(_end.getMinutes() - _end.getTimezoneOffset())

  const millisecondsPerDay = 24 * 60 * 60 * 1000

  return (endDate - startDate) / millisecondsPerDay
}