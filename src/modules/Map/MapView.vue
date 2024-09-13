<script setup lang="ts">
import LoadingComponent from '@/components/LoadingComponent.vue'
import { getUserCoordinates } from '@/shared/apis/geoApi'
import type { Coordinate } from '@/shared/types/geo'
import { onMounted, ref } from 'vue'
import MapComponent from './components/MapComponent.vue'

const userCoordinates = ref<Coordinate>({ latitude: 0, longitude: 0 })
const isLoading = ref<boolean>(true)

onMounted(async () => {
  userCoordinates.value = await getUserCoordinates()
  isLoading.value = false
})
</script>

<template>
  <LoadingComponent v-if="isLoading" />
  <MapComponent v-else :coordinate="userCoordinates" />
</template>
