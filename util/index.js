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
      pagerCount = (totalCount - totalCount % perCount) / perCount + 1
    }
    return pagerCount
  }
