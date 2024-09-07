<script lang="ts" setup>
import { type Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'
import L from 'leaflet'
import 'leaflet.heat'
import { onMounted, ref } from 'vue'

const map = ref<L.Map>()

const props = defineProps({
  coordinates: {
    type: Object as () => Coordinate,
    default: () => ({ latitude: 0, longitude: 0 })
  },
  weatherData: {
    type: Object as () => Weather[],
    default: () => ({})
  }
})

const initMap = (coord: Coordinate) => {
  map.value = L.map('map').setView([coord.latitude, coord.longitude], 10)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map.value)
}

const addHeatmapLayer = (weatherPoints: { lat: number; lon: number; temp: number }[]) => {
  const maxTemp = Math.max(...weatherPoints.map((d) => d.temp))
  const minTemp = Math.min(...weatherPoints.map((d) => d.temp))

  const heatPoints: L.HeatLatLngTuple[] = weatherPoints.map((point) => [
    point.lat,
    point.lon,
    (point.temp - minTemp) / (maxTemp - minTemp)
  ])

  L.heatLayer(heatPoints, {
    radius: 50,
    blur: 40,
    maxZoom: 8,
    minOpacity: 0.5,
    gradient: {
      0.0: 'blue',
      0.4: 'lime', // Mild areas
      0.6: 'yellow', // Warmer areas
      0.8: 'orange', // Hot areas
      1.0: 'red' // Hottest areas
    }
  }).addTo(map.value!)
}

// Fetch weather data and update heatmap
const updateHeatmap = async (weatherData: Weather[]) => {
  const weatherPoints: { lat: number; lon: number; temp: number }[] = []

  for (const loc of weatherData) {
    weatherPoints.push({
      lat: loc?.coord.lat ?? 0,
      lon: loc?.coord.lon ?? 0,
      temp: loc?.main.temp ?? 0
    })
  }

  addHeatmapLayer(weatherPoints)
}

// On component mount, initialize the map and update heatmap
onMounted(() => {
  initMap(props.coordinates)
  updateHeatmap(props.weatherData)
})
</script>

<template>
  <section class="w-full h-full">
    <div id="map"></div>
  </section>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
