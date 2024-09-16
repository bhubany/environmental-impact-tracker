<script setup lang="ts">
import { defineProps, type PropType } from 'vue'

defineProps({
  label: {
    type: String,
    default: 'Click Me'
  },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
    required: true
  },
  showButton: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div v-if="showButton" class="flex justify-center mt-8">
    <button @click="onClick" class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700">
      {{ label }}
    </button>
  </div>
</template>
