<script setup lang="ts">
import { cn } from '@/utils'
import type { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Submit'
  },
  to: {
    type: String,
    default: '#'
  },
  class: [String],
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    default: () => {}
  }
})
</script>
<template>
  <a
    @click="onClick"
    :href="props.to"
    :class="
      cn('bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded', props.class)
    "
    >{{ props.title }}</a
  >
</template>
