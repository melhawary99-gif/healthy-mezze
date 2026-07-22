export function toISODuration(time: string): string {
  const value = time.toLowerCase().trim();

  const hourMatch = value.match(/(\d+)\s*(hour|hours|hr|hrs)/);
  const minuteMatch = value.match(/(\d+)\s*(minute|minutes|min|mins)/);

  const hours = hourMatch ? Number(hourMatch[1]) : 0;
  const minutes = minuteMatch ? Number(minuteMatch[1]) : 0;

  let result = "PT";

  if (hours) result += `${hours}H`;
  if (minutes) result += `${minutes}M`;

  return result === "PT" ? "PT0M" : result;
}