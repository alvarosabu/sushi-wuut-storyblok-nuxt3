import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const { black, white, trueGray } = colors

export default defineConfig({
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      black,
      white,
      gray: trueGray,
      shrimp: {
        DEFAULT: '#FB8D4B',
        '50': '#FFFFFF',
        '100': '#FFF2EB',
        '200': '#FED9C3',
        '300': '#FDC09B',
        '400': '#FCA673',
        '500': '#FB8D4B',
        '600': '#FA6A14',
        '700': '#D15105',
        '800': '#9A3C03',
        '900': '#632702',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'system-ui', 'sans-serif'],
      display: ['Dosis', 'Georgia', 'serif'],
    },
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
})
