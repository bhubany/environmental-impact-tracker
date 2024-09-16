/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'

function withOpacity(color) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${color}), ${opacityValue})`
    }
    return `rgba(var(${color}))`
  }
}

export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, tsx, jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontSize: {
        'heading-1': ['2.25rem', { lineHeight: '2.5rem' }],
        'heading-2': ['1.875rem', { lineHeight: '2.25rem' }],
        'heading-3': ['1.5rem', { lineHeight: '2rem' }],
        'heading-4': ['1.125rem', { lineHeight: '1.5rem' }],
        'heading-5': ['0.875rem', { lineHeight: '1.25rem' }],
        'heading-6': ['0.75rem', { lineHeight: '1rem' }],
        paragraph: ['1rem', { lineHeight: '1.5rem' }]
      },
      fontWeight: {
        heading: '700', // Bold for headings
        paragraph: '400' // Normal for paragraphs
      },
      letterSpacing: {
        heading: '0.02em',
        paragraph: 'normal'
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-base)',
          inverted: 'var(--color-text-base)'
        },
        backgroundColor: {
          skin: {
            fill: 'var(--color-fill)',
            'button-accent': 'var(--color-button-accent)',
            'button-secondary': 'var(--color-button-secondary)',
            'button-tertiary': 'var(--color-button-tertiary)',
            'button-ghost': 'var(--color-button-ghost)',
            'button-disabled': 'var(--color-button-disabled)',
            'button-active': 'var(--color-button-active)',
            'button-hover': 'var(--color-button-hover)',
            'button-focus': 'var(--color-button-focus)',
            'button-pressed': 'var(--color-button-pressed)',
            'button-checked': 'var(--color-button-checked)',
            'button-checked-active': 'var(--color-button-checked-active)',
            'button-checked-hover': 'var(--color-button-checked-hover)',
            'button-checked-focus': 'var(--color-button-checked-focus)',
            'button-checked-pressed': 'var(--color-button-checked-pressed)',
            'button-checked-disabled': 'var(--color-button-checked-disabled)',
            'button-muted': withOpacity('--color-button-muted')
          }
        }
      },
      gradientColorStops: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-base)',
          inverted: 'var(--color-text-base)'
        }
      },
      colors: {
        water: {
          100: '#F7F7F7',
          200: '#F2F2F2',
          300: '#E5E5E5',
          400: '#D3D3D3',
          500: '#C9C9C9',
          600: '#B3B3B3',
          700: '#A6A6A6',
          800: '#959595',
          900: '#808080'
        },
        green: {
          100: '#E6F4EA',
          200: '#C0E4CC',
          300: '#99D3AD',
          400: '#73C38F',
          500: '#4DB271',
          600: '#399256',
          700: '#2B6B43',
          800: '#1D4630',
          900: '#0F241D'
        },
        blue: {
          100: '#E3F2FD',
          200: '#BBDEFB',
          300: '#90CAF9',
          400: '#64B5F6',
          500: '#42A5F5',
          600: '#2196F3',
          700: '#1E88E5',
          800: '#1565C0',
          900: '#0D47A1'
        },
        brown: {
          100: '#EFEBE9',
          200: '#D7CCC8',
          300: '#BCAAA4',
          400: '#A1887F',
          500: '#8D6E63',
          600: '#795548',
          700: '#6D4C41',
          800: '#5D4037',
          900: '#4E342E'
        },
        beige: {
          100: '#F5F5DC',
          200: '#EEE8CD',
          300: '#E1D9B8',
          400: '#D5C8A3',
          500: '#CAB88F',
          600: '#B8A581',
          700: '#9E8E71',
          800: '#7D6F5D',
          900: '#5B5247'
        },
        gray: {
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#EEEEEE',
          400: '#E0E0E0',
          500: '#BDBDBD',
          600: '#9E9E9E',
          700: '#757575',
          800: '#616161',
          900: '#424242'
        },
        yellow: {
          100: '#FFFDE7',
          200: '#FFF9C4',
          300: '#FFF59D',
          400: '#FFF176',
          500: '#FFEE58',
          600: '#FFEB3B',
          700: '#FDD835',
          800: '#FBC02D',
          900: '#F57F17'
        },
        teal: {
          100: '#E0F2F1',
          200: '#B2DFDB',
          300: '#80CBC4',
          400: '#4DB6AC',
          500: '#26A69A',
          600: '#009688',
          700: '#00897B',
          800: '#00796B',
          900: '#004D40'
        }
      },
      backgroundImage: {
        'not-found': "url('@/assets/images/404-not-found.png')",
        hero: "url('@/assets/images/eit-hero.png')"
      },
      animation: {
        transition: 'transform 0.2s ease'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [typography]
}
