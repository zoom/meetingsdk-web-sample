import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root,
  appType: 'mpa',
  publicDir: false,
  // These scripts share browser globals and must retain classic script ordering.
  plugins: [{
    name: 'cdn-static-scripts',
    generateBundle() {
      for (const name of readdirSync(new URL('./js/', import.meta.url))) {
        this.emitFile({
          type: 'asset',
          fileName: `js/${name}`,
          source: readFileSync(new URL(`./js/${name}`, import.meta.url)),
        });
      }
      this.emitFile({
        type: 'asset',
        fileName: 'favicon.ico',
        source: readFileSync(new URL('./favicon.ico', import.meta.url)),
      });
    },
  }],
  build: {
    rolldownOptions: {
      input: Object.fromEntries(
        ['index', 'meeting', 'helper', 'externalLinkPage'].map(name => [name, `${root}${name}.html`]),
      ),
    },
  },
});
