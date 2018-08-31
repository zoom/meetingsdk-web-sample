# webclient

Zoom offers a web based HTML5 client that is used in environments where the end users cannot download zoom desktop clients due to internal IT restrictions or in very low bandwidth environments. 

The web client lets end users join a meeting, receive screen share from other attendees, join the meeting through the phone and leave the meeting. Zoom has added a JS SDK as part of our developer platform to enable developers to embed this into their web apps. Key functions that are exposed include: init meeting config, join meeting, show/hide invite function, show/hide meeting header, get attendees list, call out, invite by phone, mute, unmute, mute all, unmute all, rename, expel, record, lock meeting, leave meeting, end meeting.

Supported Browsers: Google Chrome, Safari, and Mozilla Firefox with their latest version

## Using the SDK

Refer the [Documentation](https://devdocs.zoom.us/v1.0/reference#web-sdk)

### Include the source

```<script src="https://source.zoom.us/zoom-meeting-1.3.0.min.js"></script>```
  
Visit [Zoom Developer Platform](https://developer.zoom.us) for details and to obtain your API Key/Secret


## Update 1.3.0 notices

If you want to update 1.3.0, you need check out this repository, and update `lib, css, fonts` floder and reactjs version to you own website. keep the same path.

there are many dependencies if you want to use audio and video featues. These files are indispensable expect `zoom-meeting-1.3.0.min.js`

### Enable audio and video(2AV) and Multi-languages feature

[https://devdocs.zoom.us/v1.0/docs/javascript-sdk-functions](https://devdocs.zoom.us/v1.0/docs/javascript-sdk-functions)

### Video, Computer Audio and Sharing Supported browser

Feature | Chrome | firefox | Safair | Edge | IE | Opera | Vivaldi
------------ | ------------- | ------------ | ------------- | ------------ |  ------------- | ------------ | ------------
Video | yes| yes | yes | yes | no | yes | yes
Computer Audio | yes | no | no | no | no | no | yes 
Sharing | yes | yes | yes | yes | yes| yes | yes

### Issues

JSSDK just support sharing on IE even though enable 2AV. and don't include js_media.js when IE, it will have a error.
save it use this way [https://github.com/zoom/sample-app-web/issues/12](https://github.com/zoom/sample-app-web/issues/12)

### Quick start
```javascript
git clone git@github.com:zoom/sample-app-web.git
cd sample-app-web
npm install
npm run start
```
open browser http://localhost:9999

