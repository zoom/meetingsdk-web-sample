# Web Meeting-SDK [Component View](https://developers.zoom.us/docs/meeting-sdk/web/component-view/) Sample App
[API reference](https://developers.zoom.us/docs/meeting-sdk/web/component-view/reference/)
## How to run
   
```
cd sample-app-web/Components
npm install && npm run
```
Add your API_KEY and API_SECRET in `tools/nav.js`, 
* Open [http://localhost:3000](http://localhost:3000)  
* Navigate using `public/nav.html`



## CDN Demo(javascript)

Access through `public/cdn.html`  
Corresponding JavaScript file: `tools/cdn.js`  

## Local Demo(typescript)
Access through `public/index.html`  
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
  apiKey: 'MY_API_KEY',
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
