<script setup lang="ts">
import LoadingComponent from '@/components/LoadingComponent.vue'
import FeatureComponent from '@/modules/Home/components/FeatureComponent.vue'
import HeroComponent from '@/modules/Home/components/HeroComponent.vue'
import HotspotComponent from '@/modules/Home/components/HotspotComponent.vue'
import MissionComponent from '@/modules/Home/components/MissionComponent.vue'
import WeatherComponent from '@/modules/Home/components/WeatherComponent.vue'
import { getUserCoordinates } from '@/shared/apis/geoApi'
import { fetchWeatherData } from '@/shared/apis/weatherApi'
import { features } from '@/shared/constants/featureData'
import type { Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'
import { getWeatherData } from '@/utils/geoUtil'
import { onMounted, ref } from 'vue'

const userCoordinates = ref<Coordinate>()
const isLoading = ref<boolean>(true)
const weathers = ref<Weather[]>()
const weather = ref<Weather | null>(null)

onMounted(async () => {
  userCoordinates.value = await getUserCoordinates()
  weather.value = await fetchWeatherData(userCoordinates.value)
  weathers.value = getWeatherData() // get sample data
  weathers.value.push(weather.value!)
  isLoading.value = false
})
</script>

<template>
  <LoadingComponent v-if="isLoading" />
  <div v-else class="w-full">
    <HeroComponent />
    <MissionComponent />
    <HotspotComponent :coordinate="userCoordinates!" :weathers="weathers!" />
    <WeatherComponent :data="weather!" />
    <FeatureComponent :features="features" />
  </div>
</template>
