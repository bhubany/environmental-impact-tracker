<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { newsData } from '@/shared/constants/newsData'
import type { NewsArticle } from '@/shared/types/news'
import { onMounted, ref } from 'vue'
import BreakingNewsComponent from './components/BreakingNewsComponent.vue'
import NewsCard from './components/NewsCard.vue'

const news = ref<NewsArticle[]>([])
const loading = ref(true)

onMounted(async () => {
  //   news.value = await fetchNews()
  news.value = newsData.articles
  loading.value = false
})
</script>

<template>
  <ContentWrapper>
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <div v-else class="my-8">
      <BreakingNewsComponent :data="news[news.length - 1]" />
      <div class="flex flex-wrap items-stretch justify-center gap-8">
        <NewsCard
          v-for="article in news.slice(0, news.length - 2)"
          :key="article.source.id!"
          :data="article"
        />
      </div>
    </div>
  </ContentWrapper>
</template>
