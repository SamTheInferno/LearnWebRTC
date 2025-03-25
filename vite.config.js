import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync('cert.key'),
      cert: fs.readFileSync('cert.crt')
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
