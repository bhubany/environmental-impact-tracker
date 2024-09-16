<script setup lang="ts">
import LoadMore from '@/components/buttons/LoadMore.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { newsData } from '@/shared/constants/newsData'
import type { NewsArticle } from '@/shared/types/news'
import { computed, onMounted, ref } from 'vue'
import BreakingNewsComponent from './components/BreakingNewsComponent.vue'
import NewsCard from './components/NewsCard.vue'

const news = ref<NewsArticle[]>([])
const loading = ref(true)
const displayCount = ref(6)

const loadMore = () => {
  displayCount.value += 6
}
const hasMore = computed(() => {
  return displayCount.value < news.value.length
})

const paginatedNews = computed(() => {
  return news.value.slice(0, displayCount.value)
})

onMounted(async () => {
  //   news.value = await fetchNews()
  news.value = newsData.articles
  loading.value = false
})
</script>

<template>
  <ContentWrapper>
    <LoadingComponent v-if="loading" />
    <div v-else class="my-8">
      <BreakingNewsComponent :data="news[news.length - 1]" />
      <div class="flex flex-wrap items-stretch justify-center gap-8">
        <NewsCard v-for="article in paginatedNews" :key="article.source.id!" :data="article" />
      </div>
      <LoadMore :label="'Load More'" :onClick="loadMore" :showButton="hasMore" />
    </div>
  </ContentWrapper>
</template>
