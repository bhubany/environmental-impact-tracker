// Function to convert degrees to radians
function toRadians(deg: number): number {
  return deg * (Math.PI / 180)
}

// Haversine distance function
function haversineDistance(
  coord1: { lat: number; lon: number },
  coord2: { lat: number; lon: number }
): number {
  const R = 6371 // Earth's radius in kilometers
  const lat1 = toRadians(coord1.lat)
  const lat2 = toRadians(coord2.lat)
  const dLat = toRadians(coord2.lat - coord1.lat)
  const dLon = toRadians(coord2.lon - coord1.lon)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // Distance in kilometers
}

// Function to find all coordinates within a radius
function findCoordinatesWithinRadius(
  centerCoord: { lat: number; lon: number },
  allCoords: { lat: number; lon: number }[],
  radius: number
): { lat: number; lon: number }[] {
  return allCoords.filter((coord) => {
    const distance = haversineDistance(centerCoord, coord)
    return distance <= radius
  })
}

// Example coordinates data
const allCoords = [
  { lat: 27.7172, lon: 85.324 }, // Kathmandu
  { lat: 28.3949, lon: 84.124 }, // Pokhara
  { lat: 26.3966, lon: 87.2832 } // Biratnagar
  // Add more coordinates here
]

const centerCoord = { lat: 27.7172, lon: 85.324 } // Kathmandu's coordinates

const radius = 200 // 200 km radius

// Find all coordinates within 200 km radius
const nearbyCoords = findCoordinatesWithinRadius(centerCoord, allCoords, radius)

console.log(nearbyCoords)

function getBoundingBox(centerCoord: { lat: number; lon: number }, radius: number) {
  const R = 6371 // Earth's radius in km
  const lat = centerCoord.lat
  const lon = centerCoord.lon

  const maxLat = lat + (radius / R) * (180 / Math.PI)
  const minLat = lat - (radius / R) * (180 / Math.PI)

  const maxLon = lon + ((radius / R) * (180 / Math.PI)) / Math.cos((lat * Math.PI) / 180)
  const minLon = lon - ((radius / R) * (180 / Math.PI)) / Math.cos((lat * Math.PI) / 180)

  return { maxLat, minLat, maxLon, minLon }
}

const boundingBox = getBoundingBox(centerCoord, radius)

const filteredCoords = allCoords.filter(
  (coord) =>
    coord.lat >= boundingBox.minLat &&
    coord.lat <= boundingBox.maxLat &&
    coord.lon >= boundingBox.minLon &&
    coord.lon <= boundingBox.maxLon
)
