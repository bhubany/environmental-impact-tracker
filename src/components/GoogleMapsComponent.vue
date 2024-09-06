<script lang="ts" setup>
import { weatherDataNepal } from '@/shared/constants/weather'
import { type Coordinate } from '@/shared/types/geo'
import L from 'leaflet'
import 'leaflet.heat'
import 'leaflet/dist/leaflet.css'
import { onMounted, ref } from 'vue'

// Map and user coordinates references
const map = ref<L.Map>()
const lat = ref<number>(0)
const lon = ref<number>(0)
const userCoord = ref<Coordinate>({ latitude: 0, longitude: 0 })

// Props to accept coordinates from parent component
const props = defineProps({
  coordinates: {
    type: Object as () => Coordinate,
    default: () => ({ latitude: 0, longitude: 0 })
  }
})

// Initialize map with user location or default view
const initMap = () => {
  map.value = L.map('map').setView([26, 86], 10) // Initialize with a global view

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map.value)

  // Geolocation to set the map view to user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      map.value?.setView([26, 86], 10)
    })
  }
}

// Function to go to the input latitude and longitude
const goToLocation = () => {
  if (lat.value && lon.value) {
    map.value?.setView([lat.value, lon.value], 10)
  }
}

// Function to add heatmap layer to the map
const addHeatmapLayer = (weatherPoints: { lat: number; lon: number; temp: number }[]) => {
  const maxTemp = Math.max(...weatherPoints.map((d) => d.temp))
  const minTemp = Math.min(...weatherPoints.map((d) => d.temp))
  console.log(maxTemp)
  console.log(minTemp)

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
const updateHeatmap = async () => {
  const weatherPoints: { lat: number; lon: number; temp: number }[] = []

  // Example locations (replace with real data points)
  // const locations = [
  //   { lat: 27, lon: 85 }, // Example location
  //   { lat: 26, lon: 86 },
  //   { lat: 26, lon: 86.001 },
  //   { lat: 26, lon: 86.2 } // Add more points here
  // ]

  // Fetch weather data for each location
  const locations = weatherDataNepal
  // let idx = 1
  for (const loc of locations) {
    // const data = await fetchWeatherData({ latitude: loc.lat, longitude: loc.lon })
    weatherPoints.push({
      lat: loc?.coord.lat ?? 0,
      lon: loc?.coord.lon ?? 0,
      temp: loc?.main.temp ?? 0
    })
  }

  // for (let i = 0; i < 100; i++) {
  //   weatherPoints.push({
  //     lat: 26 + i / 100,
  //     lon: 80 + i / 100,
  //     temp: i
  //   })
  // }

  // Add heatmap to the map using fetched data
  addHeatmapLayer(weatherPoints)
}

// On component mount, initialize the map and update heatmap
onMounted(() => {
  initMap()
  updateHeatmap()
})
</script>

<template>
  <section class="w-full h-full">
    <!-- Map container -->
    <div id="map"></div>

    <!-- Controls to enter latitude and longitude -->
    <div class="flex gap-1 w-full">
      <input v-model="lat" type="number" placeholder="Enter Latitude" />
      <input v-model="lon" type="number" placeholder="Enter Longitude" />
      <button @click="goToLocation" class="bg-green-600">Go</button>
    </div>
  </section>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
