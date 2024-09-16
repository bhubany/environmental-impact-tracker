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
  <div class="w-96 shadow-lg rounded-lg bg-green-100 p-4 border border-green-300">
    <div class="p-4 w-full flex flex-col gap-4">
      <div class="flex justify-center items-center">
        <i :class="cn('pi', `pi-${data.icon}`, 'text-green-500 text-3xl')"></i>
      </div>
      <h4 class="text-heading-4 font-heading text-center text-green-700">{{ data.title }}</h4>
      <h4 class="text-heading-4 text-gray-800 text-center">{{ data.description }}</h4>
    </div>
  </div>
</template>
