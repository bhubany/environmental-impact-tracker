<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <p class="py-6 px-4 border border-blue-400 rounded-xl bg-blue-100 text-blue-800">
    <strong>{{ label }}</strong>
    <slot />
  </p>
</template>
