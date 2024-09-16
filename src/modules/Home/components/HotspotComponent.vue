<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import HeatMapComponent from '@/components/HeatMapComponent.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import type { Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'

defineProps({
  coordinate: {
    type: Object as () => Coordinate,
    required: true
  },
  weather: {
    type: Array as () => Weather[],
    required: true
  }
})
</script>

<template>
  <ContentWrapper class="bg-teal-100">
    <div class="flex flex-col py-10 px-8 gap-2">
      <h2 class="text-heading-4 font-heading text-teal-700">Explore Environmental Hotspots</h2>
      <InfoComponent label="Please Note:">
        When you allow location access, the details will be shown more accurately based on your
        precise location. Otherwise, the app will estimate your location based on your IP address.
        Rest assured, we value your privacy! This site does not store any of your personal
        information on our servers. All your data is securely stored in your browser only. You’re in
        control, and no information is shared or saved anywhere else.
      </InfoComponent>
    </div>
    <div class="flex flex-col py-10 px-8 gap-2 overflow-clip h-[500px] md:h-[700px]">
      <HeatMapComponent
        v-if="coordinate && weather"
        :coordinate="coordinate"
        :weatherData="weather"
      />
    </div>
  </ContentWrapper>
</template>
