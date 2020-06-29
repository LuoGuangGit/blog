export function getArticles (page, perPage, articles) {
  const start = (page - 1) * perPage
  const end = start + perPage
  return articles.slice(start, end)
}

export function getPagerCount (totalCount, perCount) {
  let pagerCount = 0
  if (totalCount % perCount === 0) {
    pagerCount = totalCount / perCount
  } else {
    pagerCount = (totalCount - (totalCount % perCount)) / perCount + 1
  }
  return pagerCount
}

export function formatDate (date) {
  let year = new Date(date).getFullYear()
  let month = new Date(date).getMonth() + 1
  let day = new Date(date).getDate()
  month = month < 10 ? `0${month}` : month
  day = day < 10 ? `0${day}` : day
  return `${year}年${month}月${day}日`
}
