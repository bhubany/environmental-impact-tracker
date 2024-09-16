<script lang="ts" setup>
import { type Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'
import { debounce } from '@/utils'
import { findOrCalculateWeatherData } from '@/utils/geoUtil'
import L from 'leaflet'
import 'leaflet.heat'
import { onMounted, ref } from 'vue'

const map = ref<L.Map>()
const radius = ref<number>(70)
const zoomLevel = ref<number>(7)

const props = defineProps({
  coordinate: {
    type: Object as () => Coordinate,
    required: true
  },
  weatherData: {
    type: Array as () => Weather[],
    required: true
  }
})

const initMap = () => {
  const { latitude, longitude } = props.coordinate
  map.value = L.map('map').setView([latitude, longitude], 10)

  const markerIcon = L.icon({
    iconUrl: 'src/assets/icons/map-marker.svg',
    iconSize: [50, 100]
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map.value)

  L.marker([latitude, longitude], { icon: markerIcon }).addTo(map.value)

  // Initialize zoomLevel
  zoomLevel.value = map.value.getZoom()

  // Initialize heatmap layer
  updateHeatmap(props.weatherData)
}

const handleClick = () => {
  if (map.value) {
    map.value.on('click', (e: L.LeafletMouseEvent) => {
      const { latlng } = e

      const newWeatherData = findOrCalculateWeatherData({
        latitude: latlng.lat,
        longitude: latlng.lng
      })

      const popupContent = newWeatherData
        ? `
          <div>
            <h3>Weather Details</h3>
            <p><strong>Temperature:</strong> ${newWeatherData.main.temp.toFixed(2)}°C</p>
            <p><strong>Air Quality:</strong> ${newWeatherData.clouds.all ?? 'N/A'}</p>
            <!-- Add more details as needed -->
          </div>
        `
        : '<div><h3>No data available for this location</h3></div>'

      L.popup().setLatLng(latlng).setContent(popupContent).openOn(map.value!)
    })
  }
}

const addHeatmapLayer = (weatherPoints: { lat: number; lon: number; temp: number }[]) => {
  const maxTemp = Math.max(...weatherPoints.map((d) => d.temp))
  const minTemp = Math.min(...weatherPoints.map((d) => d.temp))

  const heatPoints: L.HeatLatLngTuple[] = weatherPoints.map((point) => [
    point.lat,
    point.lon,
    (point.temp - minTemp) / (maxTemp - minTemp)
  ])

  // Remove existing heatmap layer if present
  map.value?.eachLayer((layer) => {
    if (layer instanceof L.heatLayer) {
      map.value?.removeLayer(layer)
    }
  })

  if (map.value) {
    console.log(`radius.value => ${radius.value}`)
    L.heatLayer(heatPoints, {
      radius: radius.value == 0 ? 1 : radius.value,
      blur: 20,
      maxZoom: 10,
      minOpacity: 0.5,
      gradient: {
        0.0: 'blue',
        0.4: 'lime', // Mild areas
        0.6: 'yellow', // Warmer areas
        0.8: 'orange', // Hot areas
        1.0: 'red' // Hottest areas
      }
    }).addTo(map.value)
  }
}

// Fetch weather data and update heatmap
const updateHeatmap = async (weatherData: Weather[]) => {
  const weatherPoints: { lat: number; lon: number; temp: number }[] = []

  for (const loc of weatherData) {
    weatherPoints.push({
      lat: loc?.coord.lon ?? 0,
      lon: loc?.coord.lat ?? 0,
      temp: loc?.main.temp ?? 0
    })
  }

  addHeatmapLayer(weatherPoints)
}

const handleMapZoom = () => {
  if (map.value) {
    // Remove existing zoom handlers
    map.value.off('zoom')

    map.value.on(
      'zoom',
      debounce((e: L.LeafletEvent) => {
        if (!map.value) return

        const currentZoomLevel = e.target.getZoom()
        radius.value = 15 * (currentZoomLevel / 7)

        // Update heatmap with new radius
        updateHeatmap(props.weatherData)

        console.log(`New Radius => ${radius.value}`)
        zoomLevel.value = currentZoomLevel
      }, 100)
    )
  }
}

// On component mount, initialize the map and update heatmap
onMounted(() => {
  initMap()
  handleMapZoom()
  handleClick()
})
</script>

<template>
  <section class="w-full h-full -z-0">
    <div class="w-full h-auto"></div>
    <div id="map"></div>
  </section>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
