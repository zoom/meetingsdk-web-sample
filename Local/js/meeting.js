import './tool.js';
import { ZoomMtg } from '@zoom/meetingsdk';
const testTool = window.testTool;
// get meeting args from url
const tmpArgs = testTool.parseQuery();
const meetingConfig = {
  meetingNumber: tmpArgs.mn,
  userName: (function () {
    if (tmpArgs.name) {
      try {
        return testTool.b64DecodeUnicode(tmpArgs.name);
      } catch {
        return tmpArgs.name;
      }
    }
    return 'CDN#' + tmpArgs.version + '#' + testTool.detectOS() + '#' + testTool.getBrowserInfo();
  })(),
  passWord: tmpArgs.pwd,
  leaveUrl: '/index.html',
  role: parseInt(tmpArgs.role, 10),
  userEmail: (function () {
    try {
      return testTool.b64DecodeUnicode(tmpArgs.email);
    } catch {
      return tmpArgs.email;
    }
  })(),
  lang: tmpArgs.lang,
  apiMode: tmpArgs.apiMode === 'promise' ? 'promise' : 'callback',
  signature: tmpArgs.signature || '',
  china: tmpArgs.china === '1'
};

console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

// it's option if you want to change the MeetingSDK-Web dependency link resources. setZoomJSLib must be run at first
// ZoomMtg.setZoomJSLib("https://source.zoom.us/{VERSION}/lib", "/av"); // default, don't need call it
if (meetingConfig.china) ZoomMtg.setZoomJSLib('https://jssdk.zoomus.cn/6.5.0/lib', '/av'); // china cdn option

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

function beginJoin(signature) {
  // https://developers.zoom.us/docs/meeting-sdk/web/client-view/multi-language/
  ZoomMtg.i18n.load(meetingConfig.lang);
  ZoomMtg.i18n.onLoad(function () {
    const initOptions = {
      leaveUrl: meetingConfig.leaveUrl,
      disableCORP: !window.crossOriginIsolated, // default true
      // disablePreview: false, // default false
      externalLinkPage: './externalLinkPage.html'
    };
    const joinOptions = {
      meetingNumber: meetingConfig.meetingNumber,
      userName: meetingConfig.userName,
      signature: signature,
      userEmail: meetingConfig.userEmail,
      passWord: meetingConfig.passWord
    };

    function onJoinSuccess() {
      console.log('join meeting success');

      function onAttendeesSuccess(res) {
        console.log('success getAttendeeslist', res);
      }

      function onCurrentUserSuccess(res) {
        console.log('success getCurrentUser', res.result.currentUser);
      }

      function onAttendeesError(error) {
        console.error('Failed to get attendees list', error);
      }

      function onCurrentUserError(error) {
        console.error('Failed to get current user', error);
      }

      if (meetingConfig.apiMode === 'promise') {
        ZoomMtg.getAttendeeslist({}).then(onAttendeesSuccess).catch(onAttendeesError);
        ZoomMtg.getCurrentUser({}).then(onCurrentUserSuccess).catch(onCurrentUserError);
      } else {
        ZoomMtg.getAttendeeslist({
          success: onAttendeesSuccess,
          error: onAttendeesError
        });
        ZoomMtg.getCurrentUser({
          success: onCurrentUserSuccess,
          error: onCurrentUserError
        });
      }
    }

    function onError(error) {
      console.error('Failed to initialize or join meeting', error);
    }

    if (meetingConfig.apiMode === 'promise') {
      // SDK 6.5.0 returns Promises when success/error callbacks are omitted.
      ZoomMtg.init(initOptions)
        .then(function () {
          return ZoomMtg.join(joinOptions);
        })
        .then(onJoinSuccess)
        .catch(onError);
    } else {
      ZoomMtg.init({
        ...initOptions,
        success: function () {
          ZoomMtg.join({
            ...joinOptions,
            success: onJoinSuccess,
            error: onError
          });
        },
        error: onError
      });
    }

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
  });
}

beginJoin(meetingConfig.signature);
