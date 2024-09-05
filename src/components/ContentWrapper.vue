<script setup lang="ts">
import { cn } from '@/utils'
import { defineProps } from 'vue'
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section :class="cn('mx-auto max-w-screen-xl', props.class)">
    <slot />
  </section>
</template>
