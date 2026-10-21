# Zoom Meeting SDK Web Sample

> **⚠️ Action Required:**  
> We recommend that you upgrade to 6.5.0 or above if you use WebRTC video to prevent issues with future Chrome versions.

> **Note**: Use of this sample app is subject to our [Terms of Use](https://explore.zoom.us/en/legal/zoom-api-license-and-tou/).

The [Zoom Meeting SDK for web](https://developers.zoom.us/docs/meeting-sdk/web/) embeds Zoom Meeting and Webinar experiences directly in your web application using a highly optimized WebAssembly module. Get started with the [@zoom/meetingsdk](https://www.npmjs.com/package/@zoom/meetingsdk) npm package.

![Zoom Meeting SDK Client View](https://zoom.github.io/meetingsdk-web-sample/images/6.0/ClientView/meetingsdk-web-client-view.gif)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/zoom/sample-app-web.git
cd sample-app-web
```

### 2. Choose Your Implementation

This repository contains three different implementation approaches:

| Implementation | Technology                | Port | UI             | Use Case                                     |
| -------------- | ------------------------- | ---- | -------------- | -------------------------------------------- |
| **Components** | React + TypeScript + Vite | 3000 | Component View | Modern, flexible component-based integration |
| **Local**      | Vite 8 + Oxc + NPM        | 9999 | Client View    | Traditional client view with npm packages    |
| **CDN**        | Vanilla JS + Vite 8 + CDN | 9999 | Client View    | Simple CDN-based integration                 |

Navigate to your preferred implementation:

```bash
cd Components    # or Local, or CDN
```

### 3. Install Dependencies

```bash
npm install
```

**Note**: For Node.js 16, use `npm install --force`

### 4. Set Up Authentication Backend

The Meeting SDK requires a signature from an authentication backend:

```bash
git clone https://github.com/zoom/meetingsdk-auth-endpoint-sample --depth 1
cd meetingsdk-auth-endpoint-sample
cp .env.example .env
```

Edit `.env` with your credentials:

```env
CLIENT_SECRET=your_client_secret_here
# or
ZOOM_MEETING_SDK_SECRET=your_sdk_secret_here
```

Start the auth backend:

```bash
npm install && npm run start
```

### 5. Run the Sample App

```bash
npm start
```

## 📱 Usage

1. Open your browser:
   - **Components**: http://localhost:3000
   - **Local/CDN**: http://localhost:9999

2. Enter your meeting details:
   - Meeting/Webinar number
   - Passcode
   - Role (Host or Attendee)
   - Click "Join"

## 🎯 Implementation Types

### Client View

![Client View Demo](https://zoom.github.io/meetingsdk-web-sample/images/6.0/ClientView/meetingsdk-web-client-view.gif)

**Full-page meeting experience** - Displays the Meeting SDK as a complete interface, providing the same experience as the [Zoom Web Client](https://support.zoom.us/hc/en-us/articles/214629443-Zoom-Web-Client) within your web page.

### Component View

The [component view](https://developers.zoom.us/docs/meeting-sdk/web/component-view/) provides the option to display the Meeting SDK for web in components on your page. This allows for a more flexible design. Component view is designed specifically for desktop browser use cases, not mobile environments. For mobile use cases, use [client view](https://developers.zoom.us/docs/meeting-sdk/web/client-view/).

![Component View Demo](https://zoom.github.io/meetingsdk-web-sample/images/6.0/ComponentView/meetingsdk-web-component-view.gif)

**Flexible component integration** - Embed individual meeting components within your existing page layout for custom designs and user experiences.

## 📚 Additional Resources

- [Meeting SDK Documentation](https://developers.zoom.us/docs/meeting-sdk/web/)
- [Gallery View Requirements](https://developers.zoom.us/docs/meeting-sdk/web/gallery-view/)
- [Authentication Guide](https://developers.zoom.us/docs/meeting-sdk/auth/#generate-a-meeting-sdk-jwt)

## 📦 Install the Meeting SDK for Web as ES Modules (ESM)

This section is the ESM counterpart of the UMD install steps in [Get started](https://developers.zoom.us/docs/meeting-sdk/web/get-started/). Starting with 6.10.0 the SDK ships an ESM build next to the UMD build. The existing UMD install steps still work and do not need to change; ESM is optional.

### Install from npm

React 18 is a peer dependency, so install it too if your project does not have it:

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

### Install from CDN

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

<!-- Choose between the client view or component view: -->

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

<!-- Your own code that uses ZoomMtg / ZoomMtgEmbedded -->
<script defer src="./your-app.js"></script>
```

## 🏛️ Zoom for Government (ZFG)

For government applications, you need to apply for a new SDK key at [ZFG Marketplace](https://marketplace.zoomgov.com/).

### Option 1: Use ZFG-specific SDK version

```json
{
  "dependencies": {
    "@zoom/meetingsdk": "3.11.2-zfg"
  }
}
```

### Option 2: Configure ZFG endpoints

**Client View:**

```javascript
ZoomMtg.setZoomJSLib("https://source.zoomgov.com/{VERSION}/lib", "/av");
ZoomMtg.init({
  webEndpoint: "www.zoomgov.com",
});
```

**Component View:**

```javascript
const client = ZoomMtgEmbedded.createClient();
client.init({
  assetPath: "https://source.zoomgov.com/{VERSION}/lib/av",
  webEndpoint: "www.zoomgov.com",
});
```

## 💬 Need Help?

- [Developer Support](https://developers.zoom.us/support/) - Technical support
- [Developer Forum](https://devforum.zoom.us) - Community discussions
- [Premier Developer Support](https://www.zoom.com/en/support-plans/developer/) - Priority support plans

### CDN development with Vite 8

The CDN sample uses Node.js 22 (22.12 or newer). Run `nvm install` and `nvm use` inside `CDN` to select it. Run `npm install` in `CDN`, then `npm start` for HTTP or `npm run https` to use the included local certificate. The main server uses port 9999 and the meeting isolation server uses port 9998.

Run `npm test` for server and build checks, or `npm run build` to generate `CDN/dist`. When hosting the build, configure `Cross-Origin-Resource-Policy: cross-origin` and add `Cross-Origin-Embedder-Policy: require-corp` and `Cross-Origin-Opener-Policy: same-origin` for `/meeting.html`. The CDN pages load the SDK as an ES module through an import map (React from esm.sh), so no vendor scripts are needed.

### Local development with Vite 8 and Oxc

The Local sample requires Node.js 20.19+ or 22.12+ (Node.js 22 LTS recommended). In `Local`, run `npm install`, then `npm start` for HTTP or `npm run https` for HTTPS with the included local certificate. Both use port 9999; the meeting page receives cross-origin isolation headers directly, so a second server on port 9998 is no longer needed.

Vite 8 uses Oxc for JavaScript transformation and minification. Run `npm run lint` / `npm run lint:fix` for Oxlint, and `npm run format` / `npm run format:check` for Oxfmt. SDK-provided helper HTML is kept unchanged. Run `npm run build` to generate `Local/dist`, and `npm run preview` to serve that build locally.

When deploying `Local/dist`, configure `Cross-Origin-Resource-Policy: cross-origin` on responses and `Cross-Origin-Embedder-Policy: require-corp` plus `Cross-Origin-Opener-Policy: same-origin` for `/meeting.html`, including requests with query parameters. React and the other SDK dependencies are resolved from `node_modules` and bundled by Vite, and the build includes the helper pages; deploy the entire `dist` directory.
