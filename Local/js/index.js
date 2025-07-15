import { ZoomMtg } from "@zoom/meetingsdk";

const authEndpoint = "http://127.0.0.1:4000";

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
    return data.signature;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

testTool = window.testTool;
document.getElementById("display_name").value =
  "Local#" +
  ZoomMtg.getWebSDKVersion()[0] +
  testTool.detectOS() +
  "#" +
  testTool.getBrowserInfo();
document.getElementById("meeting_number").value =
  testTool.getCookie("meeting_number");
document.getElementById("meeting_pwd").value =
  testTool.getCookie("meeting_pwd");
if (testTool.getCookie("meeting_lang"))
  document.getElementById("meeting_lang").value =
    testTool.getCookie("meeting_lang");

document.getElementById("meeting_lang").addEventListener("change", (e) => {
  testTool.setCookie(
    "meeting_lang",
    document.getElementById("meeting_lang").value
  );
  ZoomMtg.i18n.load(document.getElementById("meeting_lang").value);
  ZoomMtg.i18n.reload(document.getElementById("meeting_lang").value);
  ZoomMtg.reRender({ lang: document.getElementById("meeting_lang").value });
});

// copy zoom invite link to mn, autofill mn and pwd.
document
  .getElementById("meeting_number")
  .addEventListener("input", function (e) {
    let tmpMn = e.target.value.replace(/([^0-9])+/i, "");
    if (tmpMn.match(/([0-9]{9,11})/)) {
      tmpMn = tmpMn.match(/([0-9]{9,11})/)[1];
    }
    let tmpPwd = e.target.value.match(/pwd=([\d,\w]+)/);
    if (tmpPwd) {
      document.getElementById("meeting_pwd").value = tmpPwd[1];
      testTool.setCookie("meeting_pwd", tmpPwd[1]);
    }
    document.getElementById("meeting_number").value = tmpMn;
    testTool.setCookie(
      "meeting_number",
      document.getElementById("meeting_number").value
    );
  });

document.getElementById("clear_all").addEventListener("click", (e) => {
  testTool.deleteAllCookies();
  document.getElementById("display_name").value = "";
  document.getElementById("meeting_number").value = "";
  document.getElementById("meeting_pwd").value = "";
  document.getElementById("meeting_lang").value = "en-US";
  document.getElementById("meeting_role").value = 0;
  window.location.href = "/index.html";
});

document.getElementById("join_meeting").addEventListener("click", async (e) => {
  e.preventDefault();

  const meetingConfig = testTool.getMeetingConfig();
  if (!meetingConfig.mn || !meetingConfig.name) {
    alert("Meeting number or username is empty");
    return false;
  }
  testTool.setCookie("meeting_number", meetingConfig.mn);
  testTool.setCookie("meeting_pwd", meetingConfig.pwd);

  const signature = await getSignature(meetingConfig.mn, meetingConfig.role);
  meetingConfig.signature = signature;
  const joinUrl = "/meeting.html?" + testTool.serialize(meetingConfig);
  console.log(joinUrl);
  window.open(joinUrl, "_blank");
});

function copyToClipboard(elementId) {
  var aux = document.createElement("input");
  aux.setAttribute(
    "value",
    document.getElementById(elementId).getAttribute("link")
  );
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

// click copy jon link button
window.copyJoinLink = async function (element) {
  const meetingConfig = testTool.getMeetingConfig();
  if (!meetingConfig.mn || !meetingConfig.name) {
    alert("Meeting number or username is empty");
    return false;
  }
  const signature = await getSignature(meetingConfig.mn, meetingConfig.role);
  console.log(signature);
  meetingConfig.signature = signature;
  const joinUrl =
    testTool.getCurrentDomain() +
    "/meeting.html?" +
    testTool.serialize(meetingConfig);
  document.getElementById("copy_link_value").setAttribute("link", joinUrl);
  copyToClipboard("copy_link_value");
};
