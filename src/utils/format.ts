export function formatLongDate(iso: string) {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date(iso));

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const month = get("month");
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${get("day")} de ${capitalizedMonth} de ${get("year")}`;
}

export function padCount(value: number) {
  return String(value).padStart(2, "0");
}

export function getInitials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return "";
  }

  const first = words[0].charAt(0);
  const last = words.length > 1 ? words[words.length - 1].charAt(0) : "";

  return (first + last).toUpperCase();
}
