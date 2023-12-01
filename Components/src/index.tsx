import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";
const rootElement: HTMLElement = document.getElementById(
  "ZoomEmbeddedApp"
) as HTMLElement;

declare global {
  interface Window {
    testTool: any;
  }
}
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
  password: tmpArgs.pwd,
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
  webEndpoint: "zoom.us",
};

if (!meetingConfig.signature) {
  window.location.href = "./nav.html";
} else {
  const zmClient = ZoomMtgEmbedded.createClient();

  const tmpPort = window.location.port === "" ? "" : ":" + window.location.port;
  const avLibUrl =
    window.location.protocol +
    "//" +
    window.location.hostname +
    tmpPort +
    "/lib";

  zmClient
    .init({
      debug: true,
      zoomAppRoot: rootElement,
      assetPath: avLibUrl,
      language: meetingConfig.lang,
    })
    .then((e: any) => {
      console.log("init success", e);
    })
    .catch((e: any) => {
      console.log("init error", e);
    });

  // WebSDK Embedded join
  zmClient
    .join({
      sdkKey: meetingConfig.sdkKey,
      signature: meetingConfig.signature,
      meetingNumber: meetingConfig.meetingNumber,
      userName: meetingConfig.userName,
      password: meetingConfig.password,
      userEmail: meetingConfig.userEmail,
    })
    .then((e: any) => {
      console.log("join success", e);
    })
    .catch((e: any) => {
      console.log("join error", e);
    });
}
