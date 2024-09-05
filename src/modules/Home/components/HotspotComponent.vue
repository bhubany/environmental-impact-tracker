<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import GoogleMapsComponent from '@/components/GoogleMapsComponent.vue'
import { getUserCoordinates, type UserCoordinateTypes } from '@/shared/apis/geoApi'
import { onMounted, ref } from 'vue'

const userCoordinates = ref<UserCoordinateTypes>({ latitude: 0, longitude: 0 })

onMounted(async () => {
  userCoordinates.value = await getUserCoordinates()
  console.log(userCoordinates.value.latitude)
  console.log(userCoordinates.value.longitude)
})
</script>
<template>
  <ContentWrapper class="bg-teal-100">
    <div class="flex flex-col py-10 px-8 gap-2">
      <h2 class="text-teal-700">Explore Environmental Hotspots</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, expedita?</p>
    </div>
    <div class="flex flex-col py-10 px-8 gap-2">
      <GMapMap
        :center="userCoordinates"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GoogleMapsComponent :coordinates="userCoordinates" />
      </GMapMap>
    </div>
  </ContentWrapper>
</template>
