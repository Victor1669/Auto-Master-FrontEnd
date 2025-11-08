export function DateFormatter(date) {
  const dataFormatada = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  return dataFormatada;
}
