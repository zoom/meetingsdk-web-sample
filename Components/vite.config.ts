import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

const serverConfig = {
  host: '0.0.0.0',
  port: 3000,
  headers: {
    'Cross-Origin-Embedder-Policy': 'require-corp',
    // 'Cross-Origin-Embedder-Policy': 'credentialless',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'cross-origin'
  }
};

export default defineConfig(async () => {
  return {
    // root: './public',
    publicDir: './public',
    plugins: [
      react(),
      svgr()
    ],
    server: serverConfig
  };
});

