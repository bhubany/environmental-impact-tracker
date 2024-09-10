<script setup lang="ts">
import { cn } from '@/utils'
import { defineProps } from 'vue'

export type FeatureCardType = {
  id: number
  title: string
  description: string
  icon: string
}

defineProps({
  data: {
    type: Object as () => FeatureCardType,
    default: () => {},
    required: true
  }
})
</script>

<template>
  <div class="w-52 border shadow-lg rounded-md bg-green-50">
    <div class="p-4 w-full flex flex-col gap-4">
      <div class="flex justify-center items-center">
        <i :class="cn('pi', `pi-${data.icon}`, 'text-green-500 text-3xl')"></i>
      </div>
      <h2 class="text-lg font-bold text-center text-green-800">{{ data.title }}</h2>
      <p class="text-sm text-green-800">{{ data.description }}</p>
    </div>
  </div>
</template>
