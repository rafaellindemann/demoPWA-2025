import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Atualiza automaticamente o service worker
      manifest: {
        name: 'Minha Aplicação PWA',
        short_name: 'AppPWA',
        description: 'Uma aplicação PWA incrível!',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192x192.png', // Caminho para o ícone 192x192
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png', // Caminho para o ícone 512x512
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});