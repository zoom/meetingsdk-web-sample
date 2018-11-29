# Web SDK Client

Zoom offers a web based HTML5 client that is used in environments where the end users cannot download zoom desktop clients due to internal IT restrictions or in very low bandwidth environments. 

The web client lets end users join a meeting, receive screen share from other attendees, join the meeting through the phone and leave the meeting. Zoom has added a JS SDK as part of our developer platform to enable developers to embed this into their web apps. Key functions that are exposed include: init meeting config, join meeting, show/hide invite function, show/hide meeting header, get attendees list, call out, invite by phone, mute, unmute, mute all, unmute all, rename, expel, record, lock meeting, leave meeting, end meeting.

Supported Browsers: Google Chrome, Safari, and Mozilla Firefox with their latest version

### Getting Started with Meetings
https://marketplace.zoom.us/docs/guides/zoom-sdks/Web-Client-SDK

### Using the SDK

Refer the our [Web SDK Documentation](https://marketplace.zoom.us/docs/api-reference/sdk-reference/web-reference)

### Include the source

```<script src="https://source.zoom.us/zoom-meeting-1.3.5.min.js"></script>```
  
Visit [Zoom Developer Platform](https://devforum.zoom.us) for details and to obtain your API Key/Secret

## Update for 1.3.5
If you want to join webinar you will need to add your email to the userEmail property within the join method and set the role to 0 within the meetingConfig function. 

```
ZoomMtg.join({
    userEmail: "hello@zoom.us",
})
 ```
 ```
  role: 0
 ```
          

## Update 1.3.0 notices

If you want to update 1.3.0, you need check out this repository, and update `lib, css, fonts` floder and reactjs version to you own website. keep the same path.

there are many dependencies if you want to use audio and video featues. These files are indispensable expect `zoom-meeting-1.3.5.min.js`

### Enable audio and video(2AV) and Multi-languages feature

[https://marketplace.zoom.us/docs/api-reference/sdk-reference/web-reference](https://marketplace.zoom.us/docs/api-reference/sdk-reference/web-reference)

### Video, Computer Audio and Sharing Supported browser

Feature | Chrome | firefox | Safari | Edge | IE | Opera | Vivaldi
------------ | ------------- | ------------ | ------------- | ------------ |  ------------- | ------------ | ------------
Video | yes| yes | yes | yes | no | yes | yes
Computer Audio | yes | no | no | no | no | no | yes 
Sharing | yes | yes | yes | yes | yes| yes | yes

### Known Issues

JSSDK just support sharing on IE even though enable 2AV. and don't include js_media.js when IE, it will have a error.
save it use this way [https://github.com/zoom/sample-app-web/issues/12](https://github.com/zoom/sample-app-web/issues/12)

### Support
For any issues regarding the community our Web Client SDK, please go to our new Community Support Forum at [https://devforum.zoom.us/](https://devforum.zoom.us/)

### Quick start
```javascript
git clone git@github.com:zoom/sample-app-web.git
cd sample-app-web
npm install
npm run start
```
open browser http://localhost:9999

