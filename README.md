# Zoom Meeting SDK web sample

Use of this sample app is subject to our [Terms of Use](https://explore.zoom.us/en/legal/zoom-api-license-and-tou/).

The [Zoom Meeting SDK for web](https://developers.zoom.us/docs/meeting-sdk/web/) embeds the Zoom Meeting and Zoom Webinar experiences on a webpage through a highly optimized WebAssembly module.

![Zoom Meeting SDK Client View](https://zoom.github.io/meetingsdk-web-sample/images/6.0/ClientView/meetingsdk-web-client-view.gif)

## Installation

To get started, clone the repo:

`$ git clone https://github.com/zoom/sample-app-web.git`

## Setup

1. Once cloned, navigate to the `sample-app-web/CDN` directory for the Client View CDN sample, or `sample-app-web/Local` for the Client View NPM sample, or `sample-app-web/Components` for the Component View NPM sample:

   `$ cd sample-app-web/CDN` or `$ cd sample-app-web/Local` or `$ cd sample-app-web/Components`

1. Then install the dependencies:

   `$ npm install`

1. Get signature from backend https://github.com/zoom/meetingsdk-auth-endpoint-sample and modify .env with you key
   ```bash 
   git clone https://github.com/zoom/meetingsdk-auth-endpoint-sample --depth 1 && cd meetingsdk-auth-endpoint-sample && cp .env.example .env && npm install && npm run start
   ```
   | Key                   | Value Description |
   | -----------------------|-------------|
   | `CLIENT_ID/ZOOM_MEETING_SDK_KEY`     | Your Client ID or SDK Key. Required. |
   | `CLIENT_SECRET/ZOOM_MEETING_SDK_SECRET`  | Your Client Secret or SDK Secret. Required. |

   > [backend Meeting SDK JWT generator](https://developers.zoom.us/docs/meeting-sdk/auth/#generate-a-meeting-sdk-jwt)
1. Run the app:

   `$ npm start`

## Usage

1. Navigate to http://localhost:9999 for the `CDN` or
`Local` sample, or http://localhost:3000 for the `Components` sample. Then, enter in a Meeting or Webinar number and passcode, choose host or attendee (participant), and, click "join".

   ### Client View

   ![Zoom Meeting SDK Client View](https://zoom.github.io/meetingsdk-web-sample/images/6.0/ClientView/meetingsdk-web-client-view.gif)

   > The Client View provides the option to display the Meeting SDK as a full page. This allows for a familiar Zoom Meeting experience because the Client View is the same as the [Zoom Web Client](https://support.zoom.us/hc/en-us/articles/214629443-Zoom-Web-Client), except it lives inside your own web page.
   #### Nodejs 16
   If you are using Nodejs 16, please use `npm install --force` to proceed with the installation.

   ### Component View

   ![Zoom Meeting SDK Component View](https://zoom.github.io/meetingsdk-web-sample/images/6.0/ComponentView/meetingsdk-web-component-view.gif)

   > The Component View provides the option to display the Meeting SDK in components on your page. This allows for a more flexible design.

> Learn more about [Gallery View requirements](https://developers.zoom.us/docs/meeting-sdk/web/gallery-view/) and [see more product screenshots](https://developers.zoom.us/docs/meeting-sdk/web/gallery-view/#how-views-look-with-and-without-sharedarraybuffer).

For the full list of features and event listeners, as well as additional guides, see our [Meeting SDK docs](https://developers.zoom.us/docs/meeting-sdk/web/).

## Use ZFG(Zoom For Government). You need apply new sdk key for [ZFG](https://marketplace.zoomgov.com/).
### option1 change package.json and use zfg specific version
```
"@zoom/meetingsdk": "3.11.2-zfg"
```

### option2 change webEndpoint use ZFG [Client View](https://marketplacefront.zoom.us/sdk/meeting/web/functions/ZoomMtg.init.html) [Component View](https://marketplacefront.zoom.us/sdk/meeting/web/components/interfaces/InitOptions.html#webEndpoint) 
```
#Client view
ZoomMtg.setZoomJSLib("https://source.zoomgov.com/{VERSION}/lib", "/av");
ZoomMtg.init({
   webEndpoint: "www.zoomgov.com",
});

#Component view
const client = ZoomMtgEmbedded.createClient();
client.init({
 assetPath: 'https://source.zoomgov.com/{VERSION}/lib/av',
 webEndpoint: "www.zoomgov.com"});

```

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.
