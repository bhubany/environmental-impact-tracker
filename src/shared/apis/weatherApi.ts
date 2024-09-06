import { useApi } from '@/composable/useApi'
import { config } from '@/config'
import type { Coordinate } from '@/shared/types/geo'
import type { Weather } from '@/shared/types/weather'

export const fetchWeatherData = async (coord: Coordinate): Promise<Weather | null> => {
  const { data, error, fetchData, loading } = useApi<Weather>(config.openWeatherApiUrl)
  try {
    await fetchData(
      `weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${config.openWeatherApiKey}`
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
