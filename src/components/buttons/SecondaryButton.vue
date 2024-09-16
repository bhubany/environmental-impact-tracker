<script setup lang="ts">
import { cn } from '@/utils'
import { defineProps, type PropType } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Click Me'
  },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {}
  },
  class: [String],
  showButton: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div v-if="showButton" class="flex justify-center mt-8">
    <button
      @click="onClick"
      :class="cn('px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700', props.class)"
    >
      {{ label }}
    </button>
  </div>
</template>
