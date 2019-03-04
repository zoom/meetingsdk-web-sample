# CHANGELOG

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
