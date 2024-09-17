import { useApi } from '@/composable/useApi'
import { config } from '@/config'
import districtCoord from '@/districtCoord.json'
import type { Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'

export const fetchWeatherData = async (coord: Coordinate): Promise<Weather | null> => {
  const { data, error, fetchData, loading } = useApi<Weather>(config.openWeatherApiUrl)
  try {
    await fetchData(
      `weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${config.openWeatherApiKey}&units=metric`
    )
    if (error.value) {
      // console.error('Error fetching IP location:', error.value.message)
      return null
    }
    return data.value
  } catch (err) {
    // console.error('Error:', err)
    return null
  }
}

export const getAllDistrictWeather = async (): Promise<Weather[]> => {
  const weatherPromises = districtCoord.map((district) =>
    fetchWeatherData({ latitude: district.latitude, longitude: district.longitude })
  )

  try {
    const weatherData = await Promise.all(weatherPromises)
    return weatherData.filter((data): data is Weather => data !== null)
  } catch (error) {
    console.error('Error fetching all weather data:', error)
    return []
  }
}
