<script setup lang="ts">
import type { Coordinate } from '@/shared/types/geo'
import L from 'leaflet'
import { onMounted } from 'vue'

const props = defineProps({
  coordinate: {
    type: Object as () => Coordinate,
    required: true
  }
})

const goBack = () => {
  window.history.back()
}

const initMap = () => {
  const { latitude: lat, longitude: lng } = props.coordinate
  const map = L.map('map', {
    zoomControl: false
  })
    .setView([lat, lng], 13)
    .addControl(L.control.scale())
    .addControl(L.control.zoom({ position: 'bottomright' }))
    .setMinZoom(2)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  L.marker([lat, lng]).addTo(map)
}

const handleSearch = () => {}

onMounted(async () => {
  initMap()
})
</script>
<template>
  <div class="w-full h-screen bg-blue-300 relative">
    <div class="absolute top-12 ml-4 md:ml-8 mt-10 z-[500]">
      <div class="w-full max-w-lg mx-auto">
        <div
          class="flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-300 p-1"
        >
          <button @click="goBack" class="text-gray-600 text-xl px-4 flex items-center">
            <i class="pi pi-arrow-left"></i>
          </button>
          <input
            type="text"
            placeholder="Search Location on Maps"
            class="w-full px-4 py-2 bg-transparent border-none outline-none text-gray-800 placeholder-gray-600/80 rounded-full"
          />
          <i
            class="pi pi-search text-green-600 text-xl pr-4 z-30 cursor-pointer"
            @click="handleSearch"
          ></i>
        </div>
      </div>
    </div>
    <div v-if="coordinate" id="map" class="bg-[#AAD3DF] relative"></div>
  </div>
</template>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>
