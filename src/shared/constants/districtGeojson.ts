import type { FeatureCollection, Polygon } from 'geojson'

// Correct GeoJSON type for your district temperature data
export const districtGeoJson: FeatureCollection<Polygon> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'District A',
        temperature: 100
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [86.1, 26.1],
            [86.2, 26.2],
            [86.2, 26.3],
            [86.3, 26.4],
            [86.4, 26.5],
            [86.5, 26.6],
            [86.6, 26.7],
            [86.7, 26.8]
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'District B',
        temperature: 28
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [86.3, 26.3],
            [86.4, 26.3],
            [86.4, 26.4],
            [86.3, 26.4],
            [86.3, 26.3]
          ]
        ]
      }
    }
  ]
}
