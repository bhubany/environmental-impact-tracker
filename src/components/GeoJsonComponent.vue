<script setup lang="ts">
import { districtGeoJson } from '@/shared/constants/districtGeojson'
import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
import { onMounted, ref } from 'vue'

const map = ref<L.Map>()

const initMap = () => {
  map.value = L.map('map').setView([26, 86], 10)

  // Load tiles from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map.value)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      map.value?.setView([lat, lng], 10)
    })
  }

  // Fetch GeoJSON data and add it to the map
  // loadGeoJSON(map.value)
}

// Method to load GeoJSON and add temperature zones
const loadGeoJSON = (map: L.Map) => {
  L.geoJSON(districtGeoJson, {
    style: styleDistricts, // Set style based on temperature
    onEachFeature: onEachFeature // Add popups for each feature
  }).addTo(map)
}

// Style districts based on temperature property
const styleDistricts = (feature: any) => {
  return {
    fillColor: getTemperatureColor(feature.properties.temperature),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  }
}

// Temperature color scale
const getTemperatureColor = (temperature: number): string => {
  return temperature > 40
    ? '#800026'
    : temperature > 35
      ? '#BD0026'
      : temperature > 30
        ? '#E31A1C'
        : temperature > 25
          ? '#FC4E2A'
          : temperature > 20
            ? '#FD8D3C'
            : temperature > 15
              ? '#FEB24C'
              : temperature > 10
                ? '#FED976'
                : '#FFEDA0'
}

// Add a popup for each district with its temperature information
const onEachFeature = (feature: any, layer: any) => {
  if (feature.properties && feature.properties.name && feature.properties.temperature) {
    layer.bindPopup(
      `<strong>${feature.properties.name}</strong><br>Temperature: ${feature.properties.temperature}°C`
    )
  }
}

// Initialize the map after the component is mounted
onMounted(() => {
  initMap()
  loadGeoJSON(map.value!)
})
</script>

<template>
  <section>
    <div id="map" class="w-full h-full border border-red-700" style="height: 600px"></div>
  </section>
</template>

<style></style>
