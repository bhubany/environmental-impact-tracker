<script lang="ts" setup>
import { type UserCoordinateTypes } from '@/shared/apis/geoApi'
import { useGeolocation } from '@vueuse/core'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted, ref, watchEffect } from 'vue'

let map: leaflet.Map
let useGeoMarker: leaflet.Marker
// console.log(location)

let zoom = ref(6)
let center = ref([38, 139.69])

const { coords } = useGeolocation()
const userCoordinates = ref<UserCoordinateTypes>({ latitude: 0, longitude: 0 })

const props = defineProps({
  coordinates: {
    type: Object as () => UserCoordinateTypes,
    default: () => ({ latitude: 0, longitude: 0 })
  }
})

// const map = ref<google.maps.Map | null>(null)
// const heatmap = ref<google.maps.visualization.HeatmapLayer | null>(null)

// const initMap = async () => {
//   const loader = new Loader({
//     apiKey: config.googleMapApiKey,
//     version: 'weekly',
//     libraries: ['visualization']
//   })

//   await loader.importLibrary('core')

//   // Initialize the map
//   const mapElement = document.getElementById('map') as HTMLElement
//   map.value = new google.maps.Map(mapElement, {
//     center: { lat: props.coordinates.latitude, lng: props.coordinates.longitude },
//     zoom: 2
//   })

//   // Initialize the heatmap
//   const weatherData = await fetchWeatherData() // Fetch weather data
//   const heatMapData = weatherData.map((item) => {
//     return new google.maps.LatLng(item.lat, item.lng) // Use actual lat/lng from data
//   })

//   heatmap.value = new google.maps.visualization.HeatmapLayer({
//     data: heatMapData,
//     dissipating: true,
//     radius: 30 // Adjust this to make the heatmap points larger or smaller
//   })

//   heatmap.value.setMap(map.value)
// }

// const fetchWeatherData = async () => {
//   return [
//     { lat: 37.774546, lng: -122.433523 },
//     { lat: 40.712776, lng: -74.005974 },
//     { lat: 40.712776, lng: -74.005974 },
//     { lat: 40.712776, lng: -75.005974 },
//     { lat: 40.712776, lng: -76.005974 },
//     { lat: 40.712776, lng: -77.005974 },
//     { lat: 40.712776, lng: -78.005974 },
//     { lat: 40.712776, lng: -79.005974 },
//     { lat: 40.712776, lng: -80.005974 }
//   ]
// }

// onMounted(() => {
//   initMap()
// })

const setCoordinates = (coordinates: UserCoordinateTypes): UserCoordinateTypes => {
  userCoordinates.value = coordinates
  return userCoordinates.value
}

onMounted(() => {
  userCoordinates.value = props.coordinates
  map = leaflet
    .map('map')
    .setView([userCoordinates.value.latitude, userCoordinates.value.longitude], 13)
  leaflet
    .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
    .addTo(map)
    .openPopup()
  useGeoMarker = leaflet
    .marker([userCoordinates.value.latitude, userCoordinates.value.longitude])
    .addTo(map)
})

watchEffect(() => {
  if (
    coords.value.latitude !== Number.POSITIVE_INFINITY &&
    coords.value.longitude !== Number.NEGATIVE_INFINITY
  ) {
    console.log(coords.value)
    userCoordinates.value.latitude = coords.value.latitude
    userCoordinates.value.longitude = coords.value.longitude

    useGeoMarker = leaflet
      .marker([userCoordinates.value.latitude, userCoordinates.value.longitude])
      .addTo(map)
  }
})
</script>

<template>
  <section class="w-screen h-96 border border-green-700">
    <div id="map"></div>
  </section>
</template>

<style>
#map {
  width: auto;
  height: 100%;
}
</style>
