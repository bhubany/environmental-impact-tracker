import type { Weather } from '@/shared/types/weather'

export const weatherDataNepal: Weather[] = [
  {
    coord: {
      lon: 85.324,
      lat: 27.7172
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    base: 'stations',
    main: {
      temp: 98.15,
      feels_like: 298.35,
      temp_min: 295.15,
      temp_max: 300.15,
      pressure: 1012,
      humidity: 65,
      sea_level: 1012,
      grnd_level: 1002
    },
    visibility: 10000,
    wind: {
      speed: 3.09,
      deg: 150,
      gust: 4.5
    },
    clouds: {
      all: 0
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1283240,
    name: 'Kathmandu',
    cod: 200
  },
  {
    coord: {
      lon: 85.354,
      lat: 27.6874
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
      }
    ],
    base: 'stations',
    main: {
      temp: 99.15,
      feels_like: 299.75,
      temp_min: 296.15,
      temp_max: 301.15,
      pressure: 1010,
      humidity: 70,
      sea_level: 1010,
      grnd_level: 1000
    },
    visibility: 10000,
    wind: {
      speed: 2.5,
      deg: 160,
      gust: 3.8
    },
    clouds: {
      all: 40
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1282937,
    name: 'Patan',
    cod: 200
  },
  {
    coord: {
      lon: 83.9796,
      lat: 28.2096
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d'
      }
    ],
    base: 'stations',
    main: {
      temp: 296.61,
      feels_like: 297.31,
      temp_min: 294.61,
      temp_max: 299.61,
      pressure: 1002,
      humidity: 83,
      sea_level: 1002,
      grnd_level: 992
    },
    visibility: 10000,
    wind: {
      speed: 2.96,
      deg: 81,
      gust: 3.64
    },
    clouds: {
      all: 100
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1282898,
    name: 'Pokhara',
    cod: 200
  },
  {
    coord: {
      lon: 84.883,
      lat: 27.6847
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
      temp: 302.15,
      feels_like: 305.15,
      temp_min: 300.15,
      temp_max: 304.15,
      pressure: 1005,
      humidity: 70,
      sea_level: 1005,
      grnd_level: 995
    },
    visibility: 10000,
    wind: {
      speed: 3.5,
      deg: 100,
      gust: 4.6
    },
    clouds: {
      all: 20
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1282899,
    name: 'Chitwan',
    cod: 200
  },
  {
    coord: {
      lon: 85.324,
      lat: 27.7172
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    base: 'stations',
    main: {
      temp: 298.15,
      feels_like: 298.35,
      temp_min: 295.15,
      temp_max: 300.15,
      pressure: 1012,
      humidity: 65,
      sea_level: 1012,
      grnd_level: 1002
    },
    visibility: 10000,
    wind: {
      speed: 3.09,
      deg: 150,
      gust: 4.5
    },
    clouds: {
      all: 0
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1283240,
    name: 'Kathmandu',
    cod: 200
  },
  // 2. Bhaktapur
  {
    coord: {
      lon: 85.4277,
      lat: 27.6739
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
      temp: 297.15,
      feels_like: 298.5,
      temp_min: 296.15,
      temp_max: 299.15,
      pressure: 1010,
      humidity: 70,
      sea_level: 1010,
      grnd_level: 1005
    },
    visibility: 10000,
    wind: {
      speed: 2.5,
      deg: 160,
      gust: 3.8
    },
    clouds: {
      all: 20
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1282937,
    name: 'Bhaktapur',
    cod: 200
  },
  // 3. Lalitpur
  {
    coord: {
      lon: 85.3242,
      lat: 27.6745
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d'
      }
    ],
    base: 'stations',
    main: {
      temp: 299.15,
      feels_like: 299.75,
      temp_min: 297.15,
      temp_max: 301.15,
      pressure: 1012,
      humidity: 65,
      sea_level: 1012,
      grnd_level: 1005
    },
    visibility: 10000,
    wind: {
      speed: 2.5,
      deg: 160,
      gust: 3.5
    },
    clouds: {
      all: 100
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1282938,
    name: 'Lalitpur',
    cod: 200
  },
  // Example structure for other districts with placeholder data:
  {
    coord: {
      lon: 84.9,
      lat: 27.7
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
      }
    ],
    base: 'stations',
    main: {
      temp: 300,
      feels_like: 303,
      temp_min: 297,
      temp_max: 305,
      pressure: 1012,
      humidity: 55,
      sea_level: 1012,
      grnd_level: 1005
    },
    visibility: 10000,
    wind: {
      speed: 3,
      deg: 100,
      gust: 4
    },
    clouds: {
      all: 20
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1282939,
    name: 'Chitwan',
    cod: 200
  },
  // 5. Sunsari (Placeholder)
  {
    coord: {
      lon: 87.2,
      lat: 26.7
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d'
      }
    ],
    base: 'stations',
    main: {
      temp: 302,
      feels_like: 304,
      temp_min: 299,
      temp_max: 306,
      pressure: 1013,
      humidity: 60,
      sea_level: 1013,
      grnd_level: 1006
    },
    visibility: 10000,
    wind: {
      speed: 4,
      deg: 120,
      gust: 6
    },
    clouds: {
      all: 80
    },
    dt: 1629878400,
    sys: {
      country: 'NP',
      sunrise: 1629857700,
      sunset: 1629903570
    },
    timezone: 20700,
    id: 1282940,
    name: 'Sunsari',
    cod: 200
  },
  {
    coord: {
      lon: 87.2714,
      lat: 26.8165
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    base: 'stations',
    main: {
      temp: 302.15,
      feels_like: 305.15,
      temp_min: 300.0,
      temp_max: 303.15,
      pressure: 1008,
      humidity: 78,
      sea_level: 1008,
      grnd_level: 1003
    },
    visibility: 12000,
    wind: {
      speed: 2.5,
      deg: 100,
      gust: 3.0
    },
    clouds: {
      all: 0
    },
    dt: 1725546177,
    sys: {
      country: 'NP',
      sunrise: 1725494479,
      sunset: 1725539787
    },
    timezone: 20700,
    id: 1283670,
    name: 'Ilam',
    cod: 200
  },
  {
    coord: {
      lon: 87.4041,
      lat: 26.6169
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
      temp: 299.85,
      feels_like: 302.85,
      temp_min: 298.5,
      temp_max: 300.15,
      pressure: 1009,
      humidity: 80,
      sea_level: 1009,
      grnd_level: 1004
    },
    visibility: 11000,
    wind: {
      speed: 2.8,
      deg: 90,
      gust: 3.2
    },
    clouds: {
      all: 20
    },
    dt: 1725546178,
    sys: {
      country: 'NP',
      sunrise: 1725494479,
      sunset: 1725539787
    },
    timezone: 20700,
    id: 1283681,
    name: 'Jhapa',
    cod: 200
  },
  {
    coord: {
      lon: 87.2964,
      lat: 26.66
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d'
      }
    ],
    base: 'stations',
    main: {
      temp: 301.0,
      feels_like: 304.0,
      temp_min: 299.8,
      temp_max: 301.5,
      pressure: 1010,
      humidity: 85,
      sea_level: 1010,
      grnd_level: 1006
    },
    visibility: 10000,
    wind: {
      speed: 3.1,
      deg: 110,
      gust: 3.5
    },
    clouds: {
      all: 40
    },
    dt: 1725546179,
    sys: {
      country: 'NP',
      sunrise: 1725494479,
      sunset: 1725539787
    },
    timezone: 20700,
    id: 1283682,
    name: 'Sunsari',
    cod: 200
  },
  {
    coord: {
      lon: 87.1201,
      lat: 26.703
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d'
      }
    ],
    base: 'stations',
    main: {
      temp: 298.9,
      feels_like: 301.9,
      temp_min: 298.0,
      temp_max: 299.2,
      pressure: 1011,
      humidity: 82,
      sea_level: 1011,
      grnd_level: 1007
    },
    visibility: 9500,
    wind: {
      speed: 2.6,
      deg: 85,
      gust: 3.0
    },
    clouds: {
      all: 80
    },
    dt: 1725546180,
    sys: {
      country: 'NP',
      sunrise: 1725494479,
      sunset: 1725539787
    },
    timezone: 20700,
    id: 1283683,
    name: 'Morang',
    cod: 200
  },
  {
    coord: {
      lon: 87.0069,
      lat: 26.623
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d'
      }
    ],
    base: 'stations',
    main: {
      temp: 297.5,
      feels_like: 300.5,
      temp_min: 297.0,
      temp_max: 298.0,
      pressure: 1012,
      humidity: 86,
      sea_level: 1012,
      grnd_level: 1008
    },
    visibility: 9000,
    wind: {
      speed: 3.0,
      deg: 70,
      gust: 3.4
    },
    clouds: {
      all: 100
    },
    dt: 1725546181,
    sys: {
      country: 'NP',
      sunrise: 1725494479,
      sunset: 1725539787
    },
    timezone: 20700,
    id: 1283684,
    name: 'Udayapur',
    cod: 200
  },
  {
    coord: {
      lon: 87.2357,
      lat: 26.8266
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      }
    ],
    base: 'stations',
    main: {
      temp: 303.0,
      feels_like: 306.0,
      temp_min: 302.0,
      temp_max: 304.0,
      pressure: 1009,
      humidity: 79,
      sea_level: 1009,
      grnd_level: 1005
    },
    visibility: 13000,
    wind: {
      speed: 2.4,
      deg: 95,
      gust: 3.2
    },
    clouds: {
      all: 10
    },
    dt: 1725546182,
    sys: {
      country: 'NP',
      sunrise: 1725494479,
      sunset: 1725539787
    },
    timezone: 20700,
    id: 1283685,
    name: 'Terhathum',
    cod: 200
  },
  {
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
]
