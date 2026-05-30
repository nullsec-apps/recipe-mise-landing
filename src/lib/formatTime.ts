export function formatTime(minutes: number): string {
  if (minutes <= 0) return '0 min'
  const hrs = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hrs === 0) return `${mins} min`
  if (mins === 0) return `${hrs} hr`
  return `${hrs} hr ${mins} min`
}

export function totalTime(prep: number, cook: number): number {
  return (prep || 0) + (cook || 0)
}
