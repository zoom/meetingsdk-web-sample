/* eslint-disable no-undef */
window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  websdkready();
});

function websdkready() {
  var testTool = window.testTool;
  if (testTool.isMobileDevice()) {
    // eslint-disable-next-line no-undef
    var vConsole = new VConsole();
  }
  const authEndpoint = "http://127.0.0.1:4000";
  let CLIENT_ID = "YOUR_CLIENT_ID_OR_SDK_KEY";

  //https://developers.zoom.us/docs/meeting-sdk/auth/#signature
  async function getSignature(meetingNumber, role) {
    try {
      const response = await fetch(authEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          meetingNumber: meetingNumber,
          role: role,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.sdkKey) {
        CLIENT_ID = data.sdkKey;
      }
      return data.signature;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // some help code, remember mn, pwd, lang to cookie, and autofill.
  document.getElementById("display_name").value =
    testTool.detectOS() + "#" + testTool.getBrowserInfo();
  document.getElementById("meeting_number").value =
    testTool.getCookie("meeting_number");
  document.getElementById("meeting_pwd").value =
    testTool.getCookie("meeting_pwd");
  if (testTool.getCookie("meeting_lang"))
    document.getElementById("meeting_lang").value =
      testTool.getCookie("meeting_lang");

  document
    .getElementById("meeting_lang")
    .addEventListener("change", function (e) {
      testTool.setCookie(
        "meeting_lang",
        document.getElementById("meeting_lang").value,
      );
      testTool.setCookie(
        "_zm_lang",
        document.getElementById("meeting_lang").value,
      );
    });
  // copy zoom invite link to mn, autofill mn and pwd.
  document
    .getElementById("meeting_number")
    .addEventListener("input", function (e) {
      var tmpMn = e.target.value.replace(/([^0-9])+/i, "");
      if (tmpMn.match(/([0-9]{9,11})/)) {
        tmpMn = tmpMn.match(/([0-9]{9,11})/)[1];
      }
      var tmpPwd = e.target.value.match(/pwd=([\d,\w]+)/);
      if (tmpPwd) {
        document.getElementById("meeting_pwd").value = tmpPwd[1];
        testTool.setCookie("meeting_pwd", tmpPwd[1]);
      }
      document.getElementById("meeting_number").value = tmpMn;
      testTool.setCookie(
        "meeting_number",
        document.getElementById("meeting_number").value,
      );
    });

  document.getElementById("clear_all").addEventListener("click", function (e) {
    testTool.deleteAllCookies();
    document.getElementById("display_name").value = "";
    document.getElementById("meeting_number").value = "";
    document.getElementById("meeting_pwd").value = "";
    document.getElementById("meeting_lang").value = "en-US";
    document.getElementById("meeting_role").value = 0;
    window.location.href = "/index.html";
  });

  // click join meeting button
  document
    .getElementById("join_meeting")
    .addEventListener("click", async function (e) {
      e.preventDefault();
      var meetingConfig = testTool.getMeetingConfig();
      if (!meetingConfig.mn || !meetingConfig.name) {
        alert("Meeting number or username is empty");
        return false;
      }

      testTool.setCookie("meeting_number", meetingConfig.mn);
      testTool.setCookie("meeting_pwd", meetingConfig.pwd);

      // generateSDKSignature define in token-tool.js
      var signature = await getSignature(meetingConfig.mn, meetingConfig.role);

      meetingConfig.signature = signature;
      meetingConfig.sdkKey = CLIENT_ID;
      if (document.getElementById("demoType").value === "cdn") {
        var joinUrl = "/cdn.html?" + testTool.serialize(meetingConfig);
        console.log(joinUrl);
        window.open(joinUrl, "_blank");
      } else {
        var joinUrl = "/index.html?" + testTool.serialize(meetingConfig);
        console.log(joinUrl);
        window.open(joinUrl, "_blank");
      }
    });

  function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute(
      "value",
      document.getElementById(elementId).getAttribute("link"),
    );
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  // click copy jon link button
  window.copyJoinLink = async function (element) {
    var meetingConfig = testTool.getMeetingConfig();
    if (!meetingConfig.mn || !meetingConfig.name) {
      alert("Meeting number or username is empty");
      return false;
    }
    var signature = await getSignature(meetingConfig.mn, meetingConfig.role);
    meetingConfig.signature = signature;
    meetingConfig.sdkKey = CLIENT_ID;
    if (document.getElementById("demoType").value === "cdn") {
      var joinUrl =
        testTool.getCurrentDomain() +
        "/cdn.html?" +
        testTool.serialize(meetingConfig);
      document
        .getElementById("copy_link_value")
        .setAttribute("link", joinUrl);
      copyToClipboard("copy_link_value");
    } else {
      var joinUrl =
        testTool.getCurrentDomain() +
        "/index.html?" +
        testTool.serialize(meetingConfig);
      document
        .getElementById("copy_link_value")
        .setAttribute("link", joinUrl);
      copyToClipboard("copy_link_value");
    }
  };
}
