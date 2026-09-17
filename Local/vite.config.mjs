import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const vendorScripts = [
  'react/umd/react.production.min.js',
  'react-dom/umd/react-dom.production.min.js',
  'react-redux/dist/react-redux.min.js',
  'redux/dist/redux.min.js',
  'redux-thunk/dist/redux-thunk.min.js',
  'lodash/lodash.min.js'
];

const root = fileURLToPath(new URL('.', import.meta.url));

// Keep SDK dependencies external in both the dev optimizer and production build.
function externalLibraries() {
  const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/client': 'ReactDOM',
    'react-redux': 'ReactRedux',
    redux: 'Redux',
    'redux-thunk': 'ReduxThunk',
    lodash: '_'
  };
  const prefix = '\0external-library:';
  return {
    name: 'external-libraries',
    enforce: 'pre',
    resolveId(id) {
      if (Object.hasOwn(globals, id)) return `${prefix}${id}.cjs`;
    },
    load(id) {
      if (id.startsWith(prefix)) {
        const name = id.slice(prefix.length, -4);
        return `module.exports = window.${globals[name]};`;
      }
    }
  };
}

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
    optimizeDeps: {
      rolldownOptions: { plugins: [externalLibraries()] }
    },
    server,
    preview: server,
    plugins: [
      externalLibraries(),
      {
        name: 'meeting-pages',
        configureServer: meetingHeaders,
        configurePreviewServer: meetingHeaders,
        generateBundle() {
          // Preserve the SDK helper's classic inline scripts without transforming them.
          for (const fileName of [
            'helper.html',
            'externalLinkPage.html',
            'favicon.ico',
            ...vendorScripts.map((name) => `node_modules/${name}`)
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
