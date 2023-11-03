import { ZoomMtg } from "@zoomus/websdk";
const testTool = window.testTool;
// get meeting args from url
const tmpArgs = testTool.parseQuery();
const meetingConfig = {
  sdkKey: tmpArgs.sdkKey,
  meetingNumber: tmpArgs.mn,
  userName: (function () {
    if (tmpArgs.name) {
      try {
        return testTool.b64DecodeUnicode(tmpArgs.name);
      } catch (e) {
        return tmpArgs.name;
      }
    }
    return (
      "CDN#" +
      tmpArgs.version +
      "#" +
      testTool.detectOS() +
      "#" +
      testTool.getBrowserInfo()
    );
  })(),
  passWord: tmpArgs.pwd,
  leaveUrl: "/index.html",
  role: parseInt(tmpArgs.role, 10),
  userEmail: (function () {
    try {
      return testTool.b64DecodeUnicode(tmpArgs.email);
    } catch (e) {
      return tmpArgs.email;
    }
  })(),
  lang: tmpArgs.lang,
  signature: tmpArgs.signature || "",
  china: tmpArgs.china === "1",
};

console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

// it's option if you want to change the WebSDK dependency link resources. setZoomJSLib must be run at first
ZoomMtg.setZoomJSLib('http://localhost:9999/node_modules/@zoomus/websdk/dist/lib', '/av'); // Local version default, Angular Project change to use cdn version

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

function beginJoin(signature) {
  ZoomMtg.i18n.load(meetingConfig.lang);
  ZoomMtg.init({
    leaveUrl: meetingConfig.leaveUrl,
    disableCORP: !window.crossOriginIsolated, // default true
    // disablePreview: false, // default false
    externalLinkPage: './externalLinkPage.html',
    success: function () {
      console.log(meetingConfig);
      console.log("signature", signature);      
      ZoomMtg.join({
        meetingNumber: meetingConfig.meetingNumber,
        userName: meetingConfig.userName,
        signature: signature,
        sdkKey: meetingConfig.sdkKey,
        userEmail: meetingConfig.userEmail,
        passWord: meetingConfig.passWord,
        success: function (res) {
          console.log("join meeting success");
          console.log("get attendeelist");
          ZoomMtg.getAttendeeslist({});
          ZoomMtg.getCurrentUser({
            success: function (res) {
              console.log("success getCurrentUser", res.result.currentUser);
            },
          });
        },
        error: function (res) {
          console.log(res);
        },
      });
    },
    error: function (res) {
      console.log(res);
    },
  });

  ZoomMtg.inMeetingServiceListener('onUserJoin', function (data) {
    console.log('inMeetingServiceListener onUserJoin', data);
  });

  ZoomMtg.inMeetingServiceListener('onUserLeave', function (data) {
    console.log('inMeetingServiceListener onUserLeave', data);
  });

  ZoomMtg.inMeetingServiceListener('onUserIsInWaitingRoom', function (data) {
    console.log('inMeetingServiceListener onUserIsInWaitingRoom', data);
  });

  ZoomMtg.inMeetingServiceListener('onMeetingStatus', function (data) {
    console.log('inMeetingServiceListener onMeetingStatus', data);
  });
  
}

beginJoin(meetingConfig.signature);
