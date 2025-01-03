export const formatDate = (date: string) => {
  // format: yyyy-mm-dd
  const dateObject = new Date(date)
  return `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')}`
}
