<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import GMapComponent from '@/components/GMapComponent.vue'
import HeatMapComponent from '@/components/HeatMapComponent.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import { getUserCoordinates } from '@/shared/apis/geoApi'
import type { Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'
import { getWeatherData } from '@/utils/geoUtil'
import { onMounted, ref } from 'vue'

const userCoordinates = ref<Coordinate>({ latitude: 0, longitude: 0 })
const isCoordinatesLoaded = ref(false)
const weather = ref<Weather[]>()

onMounted(async () => {
  userCoordinates.value = await getUserCoordinates()
  weather.value = getWeatherData()
  isCoordinatesLoaded.value = true
})
</script>

<template>
  <ContentWrapper class="bg-teal-100">
    <div class="flex flex-col py-10 px-8 gap-2">
      <h2 class="text-teal-700">Explore Environmental Hotspots</h2>
      <InfoComponent label="Note:">
        When you allow location access, the details will be shown more accurately based on your
        precise location. Otherwise, the app will estimate your location based on your IP address.
      </InfoComponent>
    </div>
    <div class="flex flex-col py-10 px-8 gap-2">
      <GMapComponent v-if="isCoordinatesLoaded" :userCoordinates="userCoordinates">
        <HeatMapComponent
          v-if="isCoordinatesLoaded && weather?.length"
          :coordinates="userCoordinates"
          :weatherData="weather"
        />
      </GMapComponent>
    </div>
  </ContentWrapper>
</template>
