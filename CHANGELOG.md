# CHANGELOG
## version 1.6.1
## Bug Fixes:
1. showPureSharingContent=true, footer never overlay the share area
2. only one host in meeting, the video freeze.
3. update react-dom.min.js fix lost mouseleave event issue.
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
