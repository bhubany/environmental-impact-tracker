<script setup lang="ts">
import type { Coordinate } from '@/shared/types/geo'
import { cn } from '@/utils'
import { defineProps } from 'vue'

defineProps({
  userCoordinates: {
    type: Object as () => Coordinate,
    default: () => ({ latitude: 0, longitude: 0 })
  },
  height: String,
  width: String
})
</script>

<template>
  <GMapMap
    :center="userCoordinates"
    :zoom="7"
    map-type-id="terrain"
    :class="cn(height ? `h-[${height}]` : 'h-screen', width ? `w-[${width}]` : 'w-full')"
  >
    <slot />
  </GMapMap>
</template>
