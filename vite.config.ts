import PurgeIcons from 'vite-plugin-purge-icons'
/* import viteSvgIcons from 'vite-plugin-svg-icons' */
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    PurgeIcons({
      /* PurgeIcons Options */
    }),
  ],
})
