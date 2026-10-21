import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

function meetingHeaders(server) {
  server.middlewares.use((req, res, next) => {
    if (new URL(req.url, 'http://localhost').pathname === '/meeting.html') {
      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    }
    next();
  });
}

export default defineConfig(({ mode }) => {
  const server = {
    host: '0.0.0.0',
    port: 9999,
    strictPort: true,
    headers: {
      'Cross-Origin-Resource-Policy': 'cross-origin',
      'Access-Control-Allow-Origin': '*'
    },
    https:
      mode === 'https'
        ? {
            cert: readFileSync(new URL('./localhost.crt', import.meta.url)),
            key: readFileSync(new URL('./localhost.key', import.meta.url))
          }
        : undefined
  };

  return {
    root,
    appType: 'mpa',
    publicDir: false,
    server,
    preview: server,
    plugins: [
      {
        name: 'meeting-pages',
        configureServer: meetingHeaders,
        configurePreviewServer: meetingHeaders,
        generateBundle() {
          // Preserve the SDK helper's classic inline scripts without transforming them.
          for (const fileName of [
            'helper.html',
            'externalLinkPage.html',
            'favicon.ico'
          ]) {
            this.emitFile({
              type: 'asset',
              fileName,
              source: readFileSync(new URL(fileName, import.meta.url))
            });
          }
        }
      }
    ],
    build: {
      minify: 'oxc',
      rolldownOptions: {
        input: {
          index: `${root}index.html`,
          meeting: `${root}meeting.html`
        }
      }
    }
  };
});
