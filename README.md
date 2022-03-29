# Web Meeting SDK

Use of this SDK is subject to our [Terms of Use](https://zoom.us/docs/en-us/zoom_api_license_and_tou.html).
___
## Chrome 93 WebCodecs breaking changes
The release of Chrome 93 on August 31, 2021 resulted in [breaking changes to WebCodecs due to API updates](https://groups.google.com/a/chromium.org/g/blink-dev/c/7D3kMROZrqw), which breaks the WebSDK's ability to send video. To use Chrome 93+, you must upgrade to Web Client SDK 1.9.8 or higher.

## Chrome 92 SharedArrayBuffers breaking changes
The release of Chrome 92 on July 20, 2021 resulted in **BREAKING CHANGES** and as a result, [SharedArrayBuffers](https://web.dev/coop-coep/) no longer works by default. You must either **make your web site cross-origin isolated**, or **exempt it from cross-origin isolation requirements by applying for Origin Trials**. Note that functionality will break even if users continue using older versions such as Chrome 91. We recommend that you do one of the following:
* **Apply `SharedArrayBuffers` [origin trials](https://developer.chrome.com/origintrials/#/trials/active) for your domain**, which will work [until Chrome 103](https://developer.chrome.com/blog/enabling-shared-array-buffer/).
* Set your WebSDK/VideoSDK web isolation and update to version 1.9.6 or higher.

## Zoom ending support of Microsoft Internet Explorer
Microsoft is ending support for Internet Explorer (IE) 11 on August 17, 2021. Based on this date, Zoom has ended support for IE on September 30, 2021. Users can still use Zoom on IE after this date but we will no longer be supporting IE, fixing issues related to IE, or offering any customer support related to IE.
___

Zoom offers a web-based HTML5 client that is used in environments where the end users cannot download zoom desktop clients due to internal IT restrictions or in very low bandwidth environments.

The web client lets end users join a meeting, receive screen share from other attendees, join the meeting through the phone, and leave the meeting. Zoom has added a Web SDK as part of our developer platform to enable developers to embed this into their web apps. Key functions that are exposed include: init meeting config, join meeting, show/hide invite function, show/hide meeting header, get attendees list, call out, invite by phone, mute, unmute, mute all, unmute all, rename, expel, record, lock meeting, leave meeting, end meeting.

Supported Browsers are the latest versions of Google Chrome, Safari, and Mozilla Firefox.

### Getting Started with Meetings
See the [Zoom Web Meeting SDK documentation](https://marketplace.zoom.us/docs/sdk/native-sdks/web) to get started.

### Using the SDK
For the Component View, see the [Zoom Web SDK Component view reference documentation](https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/reference). 

For the Client View, see the [Zoom Web SDK Client view reference documentation](https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/reference).

See [Upcoming changes](https://marketplace.zoom.us/docs/guides/stay-up-to-date/upcoming-changes/web-sdk) for details about upcoming releases.

### Upgrading from 1.8.3 to 1.8.6

Since we replaced jQuery with Axios, you will need to change the following.

default [en-US.json](https://source.zoom.us/1.8.6/lib/lang/en-US.json)
```
$.i18n -> ZoomMtg.i18n

case 1: load en-US, jp-JP, zh-CN, but use jp-JP by default

ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.load('jp-JP');
ZoomMtg.i18n.load('zh-CN');
ZoomMtg.i18n.reload('jp-JP');

case 2: only load jp-JP
ZoomMtg.i18n.load('jp-JP');
ZoomMtg.i18n.reload('jp-JP');

case 3: load youself json file

ZoomMtg.i18n.load('you jason url', 'you-lang-name');
ZoomMtg.i18n.reload('you-lang-name');

other: if you joined meeting and want change language, you need add another api
ZoomMtg.reRender({lang: 'zoom support language or you-lang-name' });
```

### Dependencies

```package.json
"dependencies": {
     "react": "16.8.6",
    "react-dom": "16.8.6",
    "redux": "3.7.2",
    "react-redux": "7.1.0",
    "lodash": "^4.17.21",
    "redux-thunk": "2.2.0"
}
```
### CDN Accelerated

Global CDN ```source.zoom.us```

China CDN ```jssdk.zoomus.cn```

### Include the source

```
<script src="https://source.zoom.us/zoom-meeting-2.3.5.min.js"></script>
```
### or

```
npm install @zoomus/websdk@2.3.5
```

Please note, 2.3.5 was released with two ways to include the source, the normal way and the npm way. For npm, you need babel and webpack.

First, invoke these three API to init jssdk.
```
console.log('checkSystemRequirements');
console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

// it's option if you want to change the WebSDK dependency link resources. setZoomJSLib must be run at first
// if (!china) ZoomMtg.setZoomJSLib('https://source.zoom.us/2.3.5/lib', '/av'); // CDN version default
// else ZoomMtg.setZoomJSLib('https://jssdk.zoomus.cn/2.3.5/lib', '/av'); // china cdn option
// ZoomMtg.setZoomJSLib('http://localhost:9999/node_modules/@zoomus/websdk/dist/lib', '/av'); // Local version default, Angular Project change to use cdn version

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
```

See the sample web app (CDN version) for how to update 2.3.5

[![sample](https://zoom.github.io/sample-app-web/img/participent-joined-meeting.png)]()

## Screen share
```
ZoomMtg.init({
...
screenShare: true, // default, also requires that you enable the account's sharing setting.
...    
})
```

## Chat
```
ZoomMtg.init({
...
isSupportChat: true, // default, also requires that you enable the account's sharing setting.
...    
})
```

## Webinar notice
If you want to join a webinar you must add your email to the userEmail property within the join method and set the role to 0 within the meetingConfig function.

```
ZoomMtg.join({
...
userEmail: "hello@zoom.us",
...    
})
 ```
 ```
  role: 0
 ```


### Video, Computer Audio, and Sharing Supported browsers
Feature | Chrome | Firefox | Safari | Opera | Vivaldi
------------ | ------------- | ------------ | ------------- | ------------ | ------------
Video | yes| yes | yes | yes | yes 
Computer Audio | yes | yes | no | no | yes 
View Sharing | yes | yes | yes | yes | yes 
Screen Sharing | >=72 | >=66 | no | no | yes 
Chat | yes | yes | yes | yes | yes | yes

## Quick start
See the sample apps to quickly get started.

###  sample web app (CDN version) with dependecies.

```javascript
git clone https://github.com/zoom/sample-app-web.git --branch master --depth 1
cd sample-app-web/CDN
npm install
npm run start
```

### sample web app (local version)
```javascript
git clone https://github.com/zoom/sample-app-web.git --branch master --depth 1
cd sample-app-web/Local
npm install
npm run start
```

### [Component View demo](https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view)
```
git clone https://github.com/zoom/sample-app-web.git --branch master --depth 1
cd sample-app-web/Components
npm install && npm run
```

open browser http://localhost:9999

For details, see Components/readme.md.

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.
