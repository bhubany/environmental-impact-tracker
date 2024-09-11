<script setup lang="ts">
import type { NewsArticle } from '@/shared/types/news'
import { cn } from '@/utils'
const props = defineProps({
  data: {
    type: Object as () => NewsArticle,
    required: true
  }
})
console.log(props.data)
</script>

<template>
  <section class="max-w-screen-xl mx-auto p-4">
    <div :class="cn('!bg-green-700 text-white rounded-md p-4')">
      <h1 class="font-bold text-2xl leading-10">Breaking News</h1>
      <h2 class="font-semibold leading-6">{{ data.title }}</h2>
      <div class="my-4">
        <img :src="data.urlToImage!" :alt="data.title" class="w-full h-52 rounded-lg bg-cover" />
      </div>
      <p class="leading-6 text-clip">
        {{ data.description ?? data.content }}
      </p>
      <div class="mt-4 w-full text-end px-8">
        <a :href="data.url" target="_blank" class="!text-sm"> Read More </a>
      </div>
    </div>
  </section>
</template>
