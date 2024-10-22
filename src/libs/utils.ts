export const formatDate = (date: string) => {
  // format: yyyy-mm-dd
  const dateObject = new Date(date)
  return `${dateObject.getFullYear()}-${dateObject.getMonth().toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`
}
