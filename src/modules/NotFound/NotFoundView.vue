<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center px-10 bg-gray-200">
    <ContentWrapper>
      <div class="w-full shadow-2xl p-10 text-center bg-white rounded-lg flex flex-col gap-4">
        <div>
          <img src="@/assets/images/forest.svg" alt="not found image" />
        </div>
        <h1 class="text-green-600 font-bold text-6xl">404</h1>
        <h2 class="font-bold">Page Lost in the Wilderness</h2>
        <p class="text-gray-800">
          It seems like the page you're looking for has wandered off into nature. Let's guide you
          back to safer trails!
        </p>
        <button
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 !px-6 rounded"
          @click="$router.push('/')"
        >
          Back to Safety
        </button>
      </div>
    </ContentWrapper>
  </div>
</template>
