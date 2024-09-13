import { useApi } from '@/composable/useApi'
import { config } from '@/config'
import type { NewsArticle, NewsResponse } from '@/shared/types/news'

export const fetchNews = async (): Promise<NewsArticle[]> => {
  const { data, error, fetchData } = useApi<NewsResponse>(config.newsApiUrl)
  try {
    await fetchData(`top-headlines?category=science&apiKey=${config.newsApiKey}`)
    if (error.value) {
      // console.error('Error fetching IP location:', error.value.message)
      return []
    }

    return data?.value?.articles!
  } catch (err) {
    // console.error('Error:', err)
    return []
  }
}
