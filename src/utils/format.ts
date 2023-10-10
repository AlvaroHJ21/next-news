export function getYesterday() {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
}

export function formatDate(date: Date) {
  const año = date.getFullYear();
  const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 al mes porque los meses se indexan desde 0 (enero es 0)
  const dia = date.getDate().toString().padStart(2, '0');

  const fechaEnFormato = `${año}-${mes}-${dia}`;
  return fechaEnFormato;
}
