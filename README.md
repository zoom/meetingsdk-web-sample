# Web Client SDK 

Zoom offers a web based HTML5 client that is used in environments where the end users cannot download zoom desktop clients due to internal IT restrictions or in very low bandwidth environments. 

The web client lets end users join a meeting, receive screen share from other attendees, join the meeting through the phone and leave the meeting. Zoom has added a JS SDK as part of our developer platform to enable developers to embed this into their web apps. Key functions that are exposed include: init meeting config, join meeting, show/hide invite function, show/hide meeting header, get attendees list, call out, invite by phone, mute, unmute, mute all, unmute all, rename, expel, record, lock meeting, leave meeting, end meeting.

Supported Browsers: Google Chrome, Safari, and Mozilla Firefox with their latest version

### Getting Started with Meetings
[Web-Client-SDK Overview](https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/overview)

### Using the SDK

Refer the our [Web SDK Documentation](https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/api-reference)

### Dependencies

```package.json
"dependencies": {
	"react": "15.6.1",
	"react-dom": "15.6.1",
	"redux": "3.7.2",
	"react-redux": "5.0.6",
	"jquery": "^3.2.0",
	"lodash": "^4.17.4",
	"redux-thunk": "2.2.0"
}
```


### Include the source

```
<script src="https://source.zoom.us/zoom-meeting-1.3.8.min.js"></script>
```
### or

[![NPM](https://nodei.co/npm/zoomus-jssdk.png)](https://nodei.co/npm/zoomus-jssdk/)

```
npm install zoomus-jssdk
```


## update for 1.3.8
Please notice, 1.3.8 release with two ways, the normal way and npm way(need babel and webpack).

At first, you invoke those three API to init jssdk.
```
console.log('checkSystemRequirements');
console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));


// it's option if you want to chenge the jssdk dependency link resources.
// ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.3.7/lib', '/av'); // CDN version default 
// ZoomMtg.setZoomJSLib('http://localhost:9999/node_modules/zoomus-jssdk/dist/lib', '/av'); // Local version default

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
```
Go to see sample web app (CDN version) how to update 1.3.5 for 1.3.8

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

Feature | Chrome | firefox | Safari | Edge | IE | Opera | Vivaldi
------------ | ------------- | ------------ | ------------- | ------------ |  ------------- | ------------ | ------------
Video | yes| yes | yes | yes | no | yes | yes
Computer Audio | yes | only linux | no | no | no | no | yes 
Sharing | yes | yes | yes | yes | yes| yes | yes

### Support
For any issues regarding our Web Client SDK, please visit our new Community Support Forum at

[https://devforum.zoom.us/](https://devforum.zoom.us/)

[Register your API Key/Secret](https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/getting-started/prerequisites)

[Transitioning-your-developer-apps-to-zooms-marketplace](https://medium.com/zoom-developer-blog/transitioning-your-developer-apps-to-zooms-marketplace-6a8de3386716)


## Quick start
### More detail 
[https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/getting-started/integrate-the-sdk](https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/getting-started/integrate-the-sdk)

###  sample web app (CDN version) with dependecies.

```javascript
git clone git@github.com:zoom/sample-app-web.git
cd sample-app-web/CDN
npm install
npm run start
```

### sample web app (local version)
```javascript
git clone git@github.com:zoom/sample-app-web.git
cd sample-app-web/Local
npm install
npm run start
```

open browser http://localhost:9999

## License

Use of this software is subject to important terms and conditions as set forth in the License file

Please refer to [LICENSE.md](LICENSE.md) file for details

