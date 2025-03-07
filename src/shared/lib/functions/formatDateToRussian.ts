export const formatDateToRussian=(dateString: string, needYear?: boolean)=>{
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ]

  const date = new Date(dateString)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year= needYear? date.getFullYear() : ''

  return `${day} ${month} ${year}`
}