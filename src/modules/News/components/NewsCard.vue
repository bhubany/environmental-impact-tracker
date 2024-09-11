<script setup lang="ts">
import type { NewsArticle } from '@/shared/types/news'
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Object as () => NewsArticle,
    required: true
  }
})
</script>
<template>
  <div class="flex flex-col items-stretch w-96 rounded-lg shadow-sm bg-white p-4">
    <div class="w-full my-4">
      <img :src="data.urlToImage!" :alt="data.title" class="w-full h-48 rounded-lg bg-cover" />
    </div>
    <div>
      <h2 class="font-bold">{{ data.title }}</h2>
      <p class="text-clip">{{ data.description }}</p>
    </div>
    <div class="flex justify-between items-center text-sm text-gray-800 my-2">
      <p class="">{{ data.source.name }}</p>
      <p class="">{{ data.publishedAt }}</p>
    </div>
    <div>
      <a
        :href="data.url"
        target="_blank"
        class="text-green-700 hover:text-green-900 :underline decoration-2"
        >Read more</a
      >
    </div>
  </div>
</template>
