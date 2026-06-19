import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-192x192.png', 'icon-512x512.png'],
      manifest: {
        name: 'Arif Rahman Hidayat | Software Engineer & Frontend Developer',
        short_name: 'aa.pinn',
        description: 'Portfolio pribadi Arif Rahman Hidayat - Software Engineer, Frontend Developer, dan UI/UX Designer',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.github\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'github-api-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 },
            },
          },
        ],
      },
    }),
  ],
   build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
