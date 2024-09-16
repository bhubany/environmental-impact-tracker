<script setup lang="ts">
import LoadingComponent from '@/components/LoadingComponent.vue'
import FeatureComponent from '@/modules/Home/components/FeatureComponent.vue'
import HeroComponent from '@/modules/Home/components/HeroComponent.vue'
import HotspotComponent from '@/modules/Home/components/HotspotComponent.vue'
import MissionComponent from '@/modules/Home/components/MissionComponent.vue'
import WeatherComponent from '@/modules/Home/components/WeatherComponent.vue'
import { getUserCoordinates } from '@/shared/apis/geoApi'
import { features } from '@/shared/constants/featureData'
import type { Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'
import { getWeatherData } from '@/utils/geoUtil'
import { onMounted, ref } from 'vue'

const userCoordinates = ref<Coordinate>()
const isLoading = ref<boolean>(true)
const weather = ref<Weather[]>()

onMounted(async () => {
  userCoordinates.value = await getUserCoordinates()
  weather.value = getWeatherData()
  isLoading.value = false
})
</script>

<template>
  <LoadingComponent v-if="isLoading" />
  <div v-else class="w-full">
    <HeroComponent />
    <MissionComponent />
    <HotspotComponent :coordinate="userCoordinates!" :weather="weather!" />
    <WeatherComponent :data="weather![weather?.length! - 1]" />
    <FeatureComponent :features="features" />
  </div>
</template>
