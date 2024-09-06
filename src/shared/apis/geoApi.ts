import { useApi } from '@/composable/useApi'
import { config } from '@/config'
import type { Coordinate, IpLocationPosition } from '@/shared/types/geo'

export const getUserPosition = (): Promise<GeolocationPosition | null> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      // console.error('Geolocation is not supported by this browser.')
      return resolve(null)
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => {
        // console.error('Error getting user position:', error)
        resolve(null)
      }
    )
  })
}

export const getLocationByIp = async (): Promise<IpLocationPosition | null> => {
  const { data, error, fetchData, loading } = useApi<IpLocationPosition>(config.ipApiUrl)
  try {
    await fetchData('')
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

export const getUserCoordinates = async (): Promise<Coordinate> => {
  try {
    const position = await getUserPosition()
    if (position && 'coords' in position) {
      const { latitude, longitude } = position.coords
      return { latitude, longitude }
    }

    const ipPosition = await getLocationByIp()
    if (ipPosition) {
      const { latitude, longitude } = ipPosition
      return { latitude, longitude }
    }

    return { latitude: 0, longitude: 0 }
  } catch (error) {
    // console.error('Error getting user coordinates:', error)
    return { latitude: 0, longitude: 0 }
  }
}
