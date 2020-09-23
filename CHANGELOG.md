# CHANGELOG
## version 1.8.1
## Bug Fixes
1. Fixed bug that prevents attendees from Disable or Enable video receiving.
2. Fixed sharing content resolution compression. 
3. Fixed CSS issue where Zooms scrollbar css styles are overwritten by browser global styles. 
4. Fixed bug where the onMeetingStatus api does not throw connected and disconnected callback events. 
5. Fixed bug where audio does not work after successfully reconnecting and rejoining the meeting
6. Fixed video resolution bug where the default video resolution should be 360p instead of 180p.
 
## Add
1. Added new API getCurrentMeetingInfo to return meeting information.  
2. Show dialog to use E2E meetings for either Desktop or Mobile clients.

## version 1.8.0
## Add
1. Webinar Panelist/Host support
2. Webinar promote/depromote
3. Multi participant sharing
4. Search box for attendee list
5. meeting/webinar co-host
6. Registration Webinar
7. Webinar attendee Allow to talk
8. Merge attendee's phone call and video
9. Start Webinar(role=1, require host/alternative email), other email try to start will show "Not allow to start webinar from web."
10. inMeetingServiceListener API
12. Support Play Chime for Enter/Exit and Chat Message/Raise Hand
13. ajax call use axios(dependence)

## Bug Fixes
1. Reconnecting uses a different participant id
2. Black screen when Web SDK user is spotlighted

## Enhancements
1. fix with noise
2. Simd support(need apply try https://developers.chrome.com/origintrials/#/trials/active)
3. Waiting room notice(sound and browser notice)

## version 1.7.10
## Bug Fixes
1. Fixed random video black screen in meeting.
2. Fixed recaptcha don't work on some domain.

## version 1.7.9

## Add
1. New Rate limit for joining meetings and webinars.
2. Added recaptcha feature for joining meetings.
3. Added Vietnamese language support.
4. Added Italian language support.
5. Added Waiting Room notification.
6. Added Ruby code for generating signature.
7. Added ability for host to report attendees(only require zoom login meeting and waiting Zoom enable this feature).
8. Added new API to disable report(disableReport).
9. Added new API to hide meeting information(meetingInfo).
10. Added new API to hide VOIP option(disableVoIP).
11. Host unmute need participant admit, remove host unmute all.

## Enhancements
1. Enhanced details for error messages.
2. Ensure WASM files are downloaded before joining meetings.
3. Include version number within JSMedia file to prevent caching issues.

## Bug Fixes
1. Fixed issue when cannot unmute when joining audio.
2. Fixed issue when an webinar attendee cannot join audio using Safari browser.
3. Fixed a tag issue for starting video.
4. Fixed issue for user sees Black screen on iOS device.
5. Fixed attendee Closed Caption don't show
6. Fixed Chrome 74 audio bad issue.

## version 1.7.8

## Add
1. Added Computer Audio for Firefox version 76+.
2. New Invite dialog UI.
3. Added support for Third party audio.
4. Added support for inviting h323 devices to join meetings.

## Enhancements
1. Added password validation screen for joining meetings and webinars.
2. Enhance Invite URL format API.
3. Disabling joining meetings from Multiple devices.

## Bug Fixes
1. Fixed issue for Safari not able to open camera.
2. Fixed issue for removing Session Storage

## version 1.7.7

## Add
1. Added support for for only signed-in users with specified domains can join meetings.
2. Added support for only Authenicated users to join meetings.

## Enhancements
1. AES-GCM-256 encryption for meetings.
2. Meeting Encryption info

## Removed
1. Disable support for Microsoft Edge in place of Chromium Edge.

## version 1.7.6
## Add
1. Added a new Security Toolbar icon to display meeting security features.
2. Added support for data center selection within Account settings.

## Enhancements
1. Display label to users stating that certain browsers do not support VOIP.

## Bug Fixes
1. Fixed black screen for Webinar users when the host chooses to end the meeting for all.
2. Fixed required password not showing for users joining by phone.

## version 1.7.5
   
## Enhancements
1. Remove rwcEndpoint, 
2. Add ko-KO Korea language

## Bug Fixes
1. Fixed waiting room admit issue

## version 1.7.4
   
## Enhancements
1. WebSDK < 1.7.4 are not compatible
2. Update WebSDK AV lib version
   
## Bug Fixes
1. Leave URL is not triggered when clicking ok
2. Chat string displays string key instead of the actual string

## version 1.7.2
## Added
1. **Added support for Edge Chromium (Min version: v80+)**
2. Added a new interface `getCurrentUser` to retrieve the user information(such as userId, participantId, userName,etc.) of the current user
3. Optimized the interface `getAttendeelist` to ensure the user ID at index 0 represents the current user
4. Enhanced the chat privileges that could be configured by the host or the co-host and add new privilege `Allow Participants to chat with Everyone publicly and privately`

## Changed & Fixed 
1. Fixed an issue that the responsive menu is being cut off after resizing the window
2. Fixed an issue that the attendee sees black blocks shown on the screen when viewing the host’s shared content

## version 1.7.0
## Added
1. Added network support failover. WebSDK can now quickly reconnect back to servers without degrading the meeting experience.
2. Support new Audio Encryption Algorithm.
3. Added notification when remote meeting conrol admin starts or stops.
4. Added host to remote control meeting allowing users to chat with everyone of privately.
5. Added Spotlight for the host to choose who to foucs on when speaking instead of active speaker.
6. Added Video support for iPadOS.

## Enhancements
1. Enhanced UI visibility for full screen button.
2. Changed npm module from zoomus-jssdk -> @zoomus/websdk.
   
## Bug Fixes
1. Fixed jquery name within the Web SDK dependencies.
2. Fixed invite url domain to reflect brand settings.
3. Fixed bug where video freezes after switching tabs.
4. Fixed From & To indicator within chat to not overlap.
5. Fixed hover over chat messages to be localized.
6. Fixed localized leave meeting button to not be cutoff.
7. Fixed Chat Window after clicking Pop Out.
8. Fixed C# generate signature.

## version 1.6.1
## Bug Fixes:
1. Fixed API for showPureSharingContent so that the footer will not overlay the sharing screen area. 
2. Fixed video freezing when only one host is in the meeting.
3. Updated react-dom.min.js to fix lost mouseleave event issue.
## version 1.6.0

## Added
1. Added Closed Caption feature to show subtitles withing a meeting for attenedees and host.  
2. Added Q&A feature for Webinar attendees. 
3. Added Remote Control feature to allow WebSDK to control their meeting attendess desktop. 
 
## Enhancements:
1. Added the ability for developer to enable or disable error dialog when joining a meeting.  
2. Enhanced multi-language support for Share Screen Content during meetings. 

## Bug Fixes:
1. Fixed viewing video and view sharing for iPadOS and Mac OS Catalina. 

## version 1.5.1

## Added
* Use operation rwc configuration as rwcEndpoint

## Enhancements:
* Chat Feature Performance optimization

## Bug Fixes:
* Unable to close Audio Prompt Panel when browser is zoomed

## version 1.5.0
## Added
* Added responsive design footer for desktop and mobile based browsers.
* Display “This meeting is being recorded” dialog message before the meeting is recorded.
* New API option to enable or disable meeting non-verbal feedback.
* New API option to either always show or auto hide footer. 

## Enhancements
* Increased meeting & webinar capacity up to 1000 attendees.
* Included support for full-width and half-width phone numbers.
* Added Web SDK requirement for React version of 16.8.6.

## version 1.4.2
## Added

1. browser share (only support english)
2. chat feature
3. meeting Nonverbal feedback
4. local/cloud recording ico

## Bug Fixes:

1. Ask to start video dialog don't shown in unsupported browsers
2. Meeting timeout message is not translated
3. join meeting/webinar fail don't show dialog
4. After join meeting success immediately invoke success callback report don't joined meeting.

## version 1.3.8
## Bug Fixes:

1. video freezing when resize browser.


## version 1.3.7
## Added

1. New API setZoomJSLib, preLoadWasm, prepareJssdk, checkSystemRequirements, getJSSDKVersion
2. option disable "Original Size" mode
3. fixed firefox overlay shareing area
4. participent list width change to old style 265px
5. support import zoomus-jssdk

## Bug Fixes:

1. unexpect signature expired.
2. When mic access is blocked, click learn link direct to https://www.zoom.us/wc/support/mic


## version 1.3.5
## Added

1. Support join no registration Webinar

2. Add zh-TW language support

## Bug Fixes:
1. Video tile and participant panel never overlay sharing area
2. Missing translation fixed
3. Phone Call and Call Me auto selected user’s country - through ip location
4. Attendee must start twice for host see video
5. Auto start video respect to meeting video option


## version 1.3.0

1. Multi-languages feature

2. Support join meeting with computer's audio and video (receive and send)

3. React require ^v15.6.1

### Bug Fixes:

1. Attendee be put on hold when enable_silent_mode=true

2. Audio panel always open when sharing, connected audio and audioPanelAlwaysOpen=true

3. There is no end popup when free meeting ends

4. Remove `<div class="main"><div id='root'></div></div>` dom, jssdk will auto generate a `<div id='zmmtg-root'></div>` dom to body.


## version 1.2.4
### Bug Fixes:

1. Multi-languages user unable to join Meeting

2. Wrong Dialog

3. The meeting control agent can't mute All others

## version 1.2.3
Change small, skipped, this bug fixed with version 1.2.4
### Bug Fixes:

1. Screen Share handling for small browser size

## 2017-06-16

### Added

1. add success log and error log in init() and join()

2. add four parameters in init():
  disableInvite
  disableCallOut
  disableRecord
  disableJoinAudio
3. support to inviteCRCDevice and calcelInviteCRCDevice.

4. provide signature generate method


## 2017-04-28

### Added

1. support init web client, join meeting.

2. support to show/hide invite function.

3. support to show/hide meeting header.

4. support to get current attendees list.

5. support to call out to a phone.

6. support to recording a meeting.
