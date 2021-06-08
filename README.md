# Web Client SDK

Use of this SDK is subject to our [Terms of Use](https://zoom.us/docs/en-us/zoom_api_license_and_tou.html)
## Please note on Jul 20, Chrome 92 will release. Start from chrome92, [SharedArrayBuffer](https://web.dev/coop-coep/) only work for cross-origin isolation. it make WebSDK broken if you don't do any thing when user use Chrome 91.

1. Apply `SharedArrayBuffers` [origintrials](https://developer.chrome.com/origintrials/#/trials/active) for you domain, it works until Chrome 94 release.
2. Seting you WebSDK/VideoSDK web isolation and update to >= 1.9.6.

Zoom offers a web based HTML5 client that is used in environments where the end users cannot download zoom desktop clients due to internal IT restrictions or in very low bandwidth environments.

The web client lets end users join a meeting, receive screen share from other attendees, join the meeting through the phone, and leave the meeting. Zoom has added a Web SDK as part of our developer platform to enable developers to embed this into their web apps. Key functions that are exposed include: init meeting config, join meeting, show/hide invite function, show/hide meeting header, get attendees list, call out, invite by phone, mute, unmute, mute all, unmute all, rename, expel, record, lock meeting, leave meeting, end meeting.

Supported Browsers: Google Chrome, Safari, and Mozilla Firefox with their latest version

### Getting Started with Meetings
[Web-Client-SDK Overview](https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/overview)

### Using the SDK
Refer to the [Web SDK Documentation](https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/api-reference)

[Upcoming changes](https://marketplace.zoom.us/docs/guides/getting-started/stay-up-to-date/upcoming-changes/web-sdk)

### Upgrading from 1.8.3 to 1.8.6

Since we replaced jQuery with Axios, you will need to change the following line.

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
	"lodash": "^4.17.14",
	"redux-thunk": "2.2.0"
}
```
### CDN Accelerated

Global CDN ```source.zoom.us```

China CDN ```jssdk.zoomus.cn```

### Include the source

```
<script src="https://source.zoom.us/zoom-meeting-1.9.6.min.js"></script>
```
### or

```
npm install @zoomus/websdk@1.9.6
```
### zoomus-jssdk move to @zoomus/websdk
```
import { ZoomMtg } from 'zoomus-jssdk';
change to
import { ZoomMtg } from '@zoomus/websdk';
```
Please notice, 1.9.6 release with two ways, the normal way and npm way(need babel and webpack).

At first, you invoke those three API to init jssdk.
```
console.log('checkSystemRequirements');
console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

// it's option if you want to change the WebSDK dependency link resources. setZoomJSLib must be run at first
// if (!china) ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.6/lib', '/av'); // CDN version default
// else ZoomMtg.setZoomJSLib('https://jssdk.zoomus.cn/1.9.6/lib', '/av'); // china cdn option
// ZoomMtg.setZoomJSLib('http://localhost:9999/node_modules/@zoomus/websdk/dist/lib', '/av'); // Local version default, Angular Project change to use cdn version

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
```
Go to see sample web app (CDN version) how to update 1.9.6


[![sample](https://zoom.github.io/sample-app-web/img/participent-joined-meeting.png)]()

## Screen share
```
ZoomMtg.init({
...
screenShare: true, // default, and it also require account's sharing setting enabled.
...    
})
```

## Chat
```
ZoomMtg.init({
...
isSupportChat: true, // default, and it also require account's sharing setting enabled.
...    
})
```

## Webinar notice
If you want to join webinar you will need to add your email to the userEmail property within the join method and set the role to 0 within the meetingConfig function.

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


### Video, Computer Audio and Sharing Supported browser
Feature | Chrome | Firefox | Safari | Edge (Chromium) | IE >=11 | Opera | Vivaldi
------------ | ------------- | ------------ | ------------- | ------------ |  ------------- | ------------ | ------------
Video | yes| yes | yes | yes | no | yes | yes 
Computer Audio | yes | yes | no | yes | no | no | yes 
View Sharing | yes | yes | yes | yes | yes| yes | yes 
Screen Sharing | >=72 | >=66 | no | yes | no | no | yes 
Chat | yes | yes | yes | ywa | yes | yes | yes | yes

Please note: The WebSDK doesn't support IE10 and Edge Legacy currently.  

## Quick start
### More detail
[https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/getting-started/integrate-the-sdk](https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/getting-started/integrate-the-sdk)

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

open browser http://localhost:9999

### run demo with https
we provide a https option, other machines can join the demo and test audio and video feature.

notice: the certification signed by localhost. don't use in your production.

```
npm run https
```
open browser https://localhost:9999
### run demo with CORP(Web isolation, chrome91)
we provide a corp options to test chrome 91 web isolation mode

```
npm run corp
```

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.
