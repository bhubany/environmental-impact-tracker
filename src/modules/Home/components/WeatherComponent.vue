<script setup lang="ts">
import { config } from '@/config'
import type { Weather } from '@/shared/types/weather'
import { getTimeInNPT } from '@/utils/dateTimeUtil'
import { defineProps } from 'vue'

defineProps({
  data: {
    type: Object as () => Weather,
    required: true,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      coord: {
        lon: 87.2,
        lat: 27.0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      base: 'stations',
      main: {
        temp: 10.8,
        feels_like: 302.8,
        temp_min: 299.0,
        temp_max: 300.5,
        pressure: 1010,
        humidity: 84,
        sea_level: 1010,
        grnd_level: 1006
      },
      visibility: 11000,
      wind: {
        speed: 2.9,
        deg: 120,
        gust: 3.5
      },
      clouds: {
        all: 20
      },
      dt: 1725546183,
      sys: {
        country: 'NP',
        sunrise: 1725494479,
        sunset: 1725539787
      },
      timezone: 20700,
      id: 1283686,
      name: 'Dhankuta',
      cod: 200
    }
  }
})
</script>
<template>
  <section class="w-full">
    <div class="max-w-screen-xl mx-auto p-4">
      <div class="bg-white shadow rounded-md p-4">
        <h2 class="text-xl font-bold text-green-700 mb-2">Current Weather Conditions</h2>
        <div class="border border-gray-400 p-4 rounded-md">
          <div class="text-center my-4">
            <h2 class="font-bold">{{ data.name }} , {{ data.sys.country }}</h2>
            <p>Longitude: {{ data.coord.lat }}, Latitude: {{ data.coord.lon }}</p>
          </div>
          <div class="flex justify-around items-center m-4">
            <div class="flex flex-col justify-center items-center">
              <img
                :src="`${config.openWeatherIconUrl}${data.weather[0].icon}@2x.png`"
                :alt="data.weather[0].description"
                class="w-24 h-24"
              />
              <p class="">{{ data.weather[0].description }}</p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <h2 class="text-3xl font-bold text-green-600">{{ data.main.temp }}°C</h2>
              <p class="">
                Feels like: {{ data.main.feels_like }}
                °C
              </p>
            </div>
          </div>
          <div class="w-full text-start my-4">
            <div class="flex justify-around items-center gap-4 text-md text-gray-800 flex-wrap">
              <div class="flex flex-col items-center justify-center">
                <h2 class="font-bold text-green-600">Temperature</h2>
                <p>Min Temp: {{ data.main.temp_min }}°C</p>
                <p>Max Temp: {{ data.main.temp_max }}°C</p>
                <p>Feels Like: {{ data.main.feels_like }}°C</p>
              </div>
              <div class="flex flex-col items-center justify-center">
                <h2 class="font-bold text-green-600">Other Conditions</h2>
                <p>Humidity: {{ data.visibility }} km</p>
                <p>Pressure: {{ data.main.pressure }} hPa</p>
                <p>Sea Level: {{ data.main.sea_level }} hPa</p>
                <p>Ground Level: {{ data.main.grnd_level }} hPa</p>
                <p>Cloudiness: {{ data.clouds.all }}%</p>
              </div>
              <div class="flex flex-col items-center justify-center">
                <h2 class="font-bold text-green-600">Wind</h2>
                <p>Wind Speed: {{ data.wind.speed }}m/s</p>
                <p>Wind Gust: {{ data.wind.gust }}m/s</p>
                <p>Wind Direction: {{ data.wind.deg }}°</p>
              </div>
              <div class="flex flex-col items-center justify-center">
                <h2 class="font-bold text-green-600">Visibility & Time</h2>
                <p>Visibility: {{ data.visibility }} km</p>
                <p>Sunrise: {{ getTimeInNPT(data.sys.sunrise) }}</p>
                <p>Sunset: {{ getTimeInNPT(data.sys.sunset) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
