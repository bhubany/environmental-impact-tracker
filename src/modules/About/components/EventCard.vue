<script setup lang="ts">
import { cn } from '@/utils'
import { defineProps } from 'vue'
import type { EventType } from './CommunityInitiativesComponent.vue'

defineProps({
  data: {
    type: Object as () => EventType,
    required: true
  }
})
</script>
<template>
  <div
    :class="
      cn(
        'w-96 flex justify-start items-center border border-gray-400 bg-white',
        'rounded-lg py-4 px-10 gap-10 transition-transform duration-200 ease-in',
        ' hover:-translate-y-1 hover:shadow-lg'
      )
    "
  >
    <span class="text-4xl">{{ data.icon }}</span>
    <div class="text-gray-800">
      <h4 class="text-heading-4 font-heading text-gray-900">{{ data.title }}</h4>
      <p>
        <span class="text-green-600">Date:</span>
        {{ data.date }}
      </p>
      <p>
        <span class="text-green-600">Time: </span>
        {{ data.time }}
      </p>
      <p>
        <span class="text-green-600">Location:</span>
        {{ data.location }}
      </p>
    </div>
  </div>
</template>
