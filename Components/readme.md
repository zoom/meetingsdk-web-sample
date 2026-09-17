# Web Meeting-SDK [Component View](https://developers.zoom.us/docs/meeting-sdk/web/component-view/) Sample App
[API reference](https://developers.zoom.us/docs/meeting-sdk/web/component-view/reference/)
## How to run
   
```
cd sample-app-web/Components
npm install && npm run start
```
Add your SDK KEY and SDK SECRET in `tools/nav.js`, 
* Open [http://localhost:3000](http://localhost:3000)  
* Navigate using `public/nav.html`



## CDN Demo(javascript)

Access through `public/cdn.html`  
Corresponding JavaScript file: `tools/cdn.js`  

## Local Demo(typescript)
Access through `index.html`  
Corresponding TypeScript file: `src/index.tsx`  

## Basics
* After initializing with a container (typically a `<div>`) of your choice, the client will be embedded in said container and be usable just like any other Zoom client
* APIs are provided to programmatically access information and attributes about the meeting, current user, etc.
* Customization options are available to vary the look-and-feel of the client

Please refer to the official SDK documentation for more details

```js
// Import the SDK
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";

// Select the root element you want to embed the client inside
const rootElement = document.getElementById("my_root");

// Create the client
const client = ZoomMtgEmbedded.createClient();

// Set your init parameters
const initParams = {
  zoomAppRoot: rootElement,
  // ...
};

// Set your join params
const joinParams = {
  // ...
};

// Init client
client.init(initParams);

// Join the meeting
client
  .join(joinParams)
  .then((e) => {
      // Execute post join-meeting logic accordingly
    })
    .catch((e) => {
      // Handle join-meeting errors accordingly
    });

```

## update
npx npm-check -u

## Development checks

Use Node.js 22.12+ for the development tools, including Commitlint 21.

```sh
npm run lint       # Oxlint, including type-aware checks
npm run lint:fix   # Apply safe lint fixes
npm run format    # Format src and vite.config.ts with Oxfmt
npm run format:check # Check formatting without modifying files
npm run build      # TypeScript 7 type check and Vite 8 production build
```

Oxlint rules are configured in `.oxlintrc.json`, with correctness checks and
React Hooks rules enabled. This replaces the previous ESLint/Airbnb/Standard
configuration; it does not reproduce every rule from those presets. Oxfmt
handles formatting through `.oxfmtrc.json` and lint-staged, including TypeScript
files. Vite 8 and `@vitejs/plugin-react` 6 use Oxc for JavaScript/TypeScript and
React transforms.
