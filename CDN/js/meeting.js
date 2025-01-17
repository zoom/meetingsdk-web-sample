window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  websdkready();
});

function websdkready() {
  var testTool = window.testTool;
  // get meeting args from url
  var tmpArgs = testTool.parseQuery();
  var meetingConfig = {
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

  // a tool use debug mobile device
  if (testTool.isMobileDevice()) {
    vConsole = new VConsole();
  }
  console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

  // it's option if you want to change the MeetingSDK-Web dependency link resources. setZoomJSLib must be run at first
  // ZoomMtg.setZoomJSLib("https://source.zoom.us/{VERSION}/lib", "/av"); // default, don't need call it
  if (meetingConfig.china)
    ZoomMtg.setZoomJSLib("https://jssdk.zoomus.cn/3.11.2/lib", "/av"); // china cdn option

  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareWebSDK();

  function beginJoin(signature) {
    ZoomMtg.i18n.load(meetingConfig.lang);
    ZoomMtg.init({
      leaveUrl: meetingConfig.leaveUrl,
      webEndpoint: meetingConfig.webEndpoint,
      disableCORP: !window.crossOriginIsolated, // default true
      // disablePreview: false, // default false
      externalLinkPage: "./externalLinkPage.html",
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

    ZoomMtg.inMeetingServiceListener("onUserJoin", function (data) {
      console.log("inMeetingServiceListener onUserJoin", data);
    });

    ZoomMtg.inMeetingServiceListener("onUserLeave", function (data) {
      console.log("inMeetingServiceListener onUserLeave", data);
    });

    ZoomMtg.inMeetingServiceListener("onUserIsInWaitingRoom", function (data) {
      console.log("inMeetingServiceListener onUserIsInWaitingRoom", data);
    });

    ZoomMtg.inMeetingServiceListener("onMeetingStatus", function (data) {
      console.log("inMeetingServiceListener onMeetingStatus", data);
    });
  }

  beginJoin(meetingConfig.signature);
}
