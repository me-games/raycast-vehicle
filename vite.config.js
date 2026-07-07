// Genex port glue: serve/build with relative asset paths so the game works
// both at the domain root and under any sub-path. Author code untouched.
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
})
