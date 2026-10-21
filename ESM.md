# Install the Meeting SDK for Web as ES Modules (ESM) — 6.10.0 and later

This page is the ESM counterpart of the UMD install steps in [Get started](https://developers.zoom.us/docs/meeting-sdk/web/get-started/). The SDK ships an ESM build next to the UMD build.

## Install from npm

Run this in your project terminal. React 18 is a peer dependency, so install it too if your project does not have it:

```bash
npm install @zoom/meetingsdk react react-dom --save
```

The package `exports` map chooses the build for you. Bundlers and native ESM get the ESM files; `require` gets UMD.

**Client view**

```js
import { ZoomMtg } from "@zoom/meetingsdk";
```

**Component view**

```js
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";
```

Notes for bundlers (Vite, Webpack, ...):

- Let the bundler resolve `react` and `react-dom` from `node_modules`. Do not map them to `window.React` / `window.ReactDOM` and do not add the vendor `<script>` tags; that was only needed for UMD.
- Do not alias the SDK to its UMD file unless you are testing UMD on purpose.

## Install from CDN

With ESM you do **not** add the six `lib/vendor/*.min.js` tags from the UMD instructions (react, react-dom, redux, redux-thunk, react-redux, lodash). Those files are UMD scripts and cannot satisfy an ESM `import`. The ESM build only needs `react`, `react-dom` and `react-dom/client`, which you provide with an import map.

Add this to the HTML page that hosts the SDK, or to `index.html` for a single page app. Replace `{VERSION_NUMBER}` with the version in `#.#.#` format (for example `6.10.0`):

```html
<!-- Where the browser finds React (must come before any module script) -->
<script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@18.3.1",
      "react-dom": "https://esm.sh/react-dom@18.3.1?deps=react@18.3.1",
      "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?deps=react@18.3.1"
    }
  }
</script>

<!-- Choose ONE of the two views below (keep only the one you use): -->

<!-- ESM for client view -->
<script type="module">
  import { ZoomMtg } from "https://source.zoom.us/{VERSION_NUMBER}/esm/client-view.es.min.js";
  window.ZoomMtg = ZoomMtg;
</script>

<!-- ESM for component view -->
<script type="module">
  import ZoomMtgEmbedded from "https://source.zoom.us/{VERSION_NUMBER}/esm/component-view.es.min.js";
  window.ZoomMtgEmbedded = ZoomMtgEmbedded;
</script>

<!-- Your own code that uses ZoomMtg / ZoomMtgEmbedded.
     Keep it AFTER the module scripts: window.ZoomMtg / window.ZoomMtgEmbedded is set there,
     and module and defer scripts run in document order. -->
<script defer src="./your-app.js"></script>
```

## Install from CDN with UMD (existing method)

The UMD build still works and does not need to change. Replace `{VERSION_NUMBER}` with the version in `#.#.#` format:

```html
<!-- Dependencies for client view and component view -->
<script src="https://source.zoom.us/{VERSION_NUMBER}/lib/vendor/react.min.js"></script>
<script src="https://source.zoom.us/{VERSION_NUMBER}/lib/vendor/react-dom.min.js"></script>
<script src="https://source.zoom.us/{VERSION_NUMBER}/lib/vendor/redux.min.js"></script>
<script src="https://source.zoom.us/{VERSION_NUMBER}/lib/vendor/redux-thunk.min.js"></script>
<script src="https://source.zoom.us/{VERSION_NUMBER}/lib/vendor/react-redux.min.js"></script>
<script src="https://source.zoom.us/{VERSION_NUMBER}/lib/vendor/lodash.min.js"></script>

<!-- Choose between the client view or component view: -->

<!-- CDN for client view -->
<script src="https://source.zoom.us/zoom-meeting-{VERSION_NUMBER}.min.js"></script>

<!-- CDN for component view -->
<script src="https://source.zoom.us/zoom-meeting-embedded-{VERSION_NUMBER}.min.js"></script>
```

Do not mix the two methods on the same page: use either the UMD scripts above or the ESM import map and module scripts, not both.
