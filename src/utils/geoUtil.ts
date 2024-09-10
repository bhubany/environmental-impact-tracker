import type { Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'
import weatherData from '@/weatherData.json'

export const getWeatherData = (): Weather[] => {
  return weatherData as Weather[]
}

export const findOrCalculateWeatherData = (coordinate: Coordinate): Weather => {
  const { latitude, longitude } = coordinate
  const exactMatch = weatherData.find(
    (data) =>
      Math.abs(data.coord.lat - latitude) < 0.0001 && Math.abs(data.coord.lon - longitude) < 0.0001
  )

  if (exactMatch) {
    return exactMatch as Weather
  }
  return interpolateWeatherData(latitude, longitude)
}

const interpolateWeatherData = (latitude: number, longitude: number): Weather => {
  const distances = weatherData.map((data) => {
    const dx = data.coord.lat - latitude
    const dy = data.coord.lon - longitude
    return Math.sqrt(dx * dx + dy * dy)
  })

  // Find the two closest points
  const sortedIndices = distances
    .map((distance, index) => ({ distance, index }))
    .sort((a, b) => a.distance - b.distance)
    .map((item) => item.index)

  if (sortedIndices.length < 2) {
    return {} as Weather
  }

  const [index1, index2] = sortedIndices.slice(0, 2)
  const point1 = weatherData[index1]
  const point2 = weatherData[index2]

  // Calculate weights for interpolation
  const d1 = distances[index1]
  const d2 = distances[index2]
  const totalDistance = d1 + d2

  const weight1 = d2 / totalDistance
  const weight2 = d1 / totalDistance

  const interpolatedTemp = weight1 * point1.main.temp + weight2 * point2.main.temp

  // // Optionally interpolate other fields (e.g., air_quality)
  // const interpolatedAirQuality =
  //   (point1.air_quality ?? 0) * weight1 + (point2.air_quality ?? 0) * weight2

  return {
    coord: {
      lon: longitude,
      lat: latitude
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
      temp: interpolatedTemp,
      feels_like: 302.8,
      temp_min: 299,
      temp_max: 300.5,
      pressure: 1010,
      humidity: 84,
      sea_level: 1010,
      grnd_level: 1006
    },
    visibility: 11000,
    wind: {
      speed: 0.6000000000000001,
      deg: 1.5,
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
