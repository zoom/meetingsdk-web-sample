# CHANGELOG
## version 1.9.6
## Added
1. Active Apps Notifier.

When someone in a meeting or webinar is utilizing any app that has access to real-time content or personal information during a meeting, participants are given real-time notice of usage. Details of which apps have access and which participant is using the app are displayed. Clicking the app opens the Marketplace page to provide more information.

Note: This feature is dependent on a web release scheduled for June 16, 2021, and will not work until then.

## Enhanced
1. Panelists can join webinars by entering the tk token value in a dialog box

## Fixed
1. Removed the assistant Breakout Room button
2. Support for attendees joining via new registration flow, where attendees are required to verify their email via correct tk

## version 1.9.5
## Added
1. Support language interpretation for participants.
2. Support for audio and video preview before joining a meeting or webinar.
3. Support for auto and manually approved registered Meetings.
4. Support meeting and webinar registrations using the “tk” parameter.
5. Support for panelists to join registration webinars in Practice mode using the "tk" parameter.
6. Support for automatically joining a webinar as a panelist.
7. Support for joining manually-approved webinars.
8. Support for reordering gallery and speaker view within webinars.
9. Add helper.html to support Web SDK isolation for changes related to Chrome 92. See [announcement] for details.
10. Support Audio quality of service (QOS).
11. setLogLevel API to print logs. To use this API, set debug to true and use setLogLevel('info').
12. Support for pre-assigned breakout rooms.
13. Ability to disable audio and video preview within the initialize function.

## Enhanced
1. UI improvements for styles, such as meeting info icons, updated label for the stop recording dialog, updated raise hand icon position for active speaker mode.
2. Participants can choose the breakout room that they want to join.
3. When entering or leaving a breakout room, the SDK auto enables audio and video.

## Fixed
1. Chrome 90 issue where video freezes when WebCodecs is turned on.


## version 1.9.1
## Additions
1. Added support for hosts to delete chat messages for in meeting or Webinar  chats. 
2. Added support for Chrome Origin Trials within the WebSDK.
 
## Enhancements
1. Removed more option button that contain non verbal feedback. 
2. Added support dialog informing customers to update WebSDK version
 
## Bug Fixes
1. Fixed init parameters that were not working. 
2. Fixed issue where users can escalate their own privilege. 
3. Fixed audio issue after users are admitted from the waiting room.


## version 1.9.0
## Add
1. Added support for Gallery View.
2. Added support for meeting hosts to send messages to participants in a Waiting Room.
3. Added support for pausing recordings.

## Enhancements
1. Enhanced display message for blocking participants from certain regions to join meetings.
2. Enhanced messaging to update WebSDK version.
3. Enhanced JSmedia file for Gallery View support, fixing audio issues, and errors within the browsers console.

## Bug Fixes
1. Fixed invite email length to open email client.
2. Fixed Share privileges in Breakout Rooms to match the main Meeting session.
3. Fixed Chat privileges in Breakout Room to match the main meeting session.
4. Fixed grammatical errors for polling results.
5. Fixed German translation errors.
6. Fixed UI issue where Q&A comments covering participants name.


## version 1.8.6
## Bug Fixes
1. Fixed Attendee cannot join in to BreakOut Room when "Enable Waiting Room" is enabled
2. Fixed Attendee Leaves meeting show 'trying to reconect'
3. Fixed Joined audio user can't show wating room when be put on hold
4. Fixed Android Chrome Audio don't work
5. Fixed Audio stops working when High-Fidelity/Stereo Mode is Enabled
6. Fixed Start Video Black Screen in Mac When Only One attendee
7. Fixed "The host mute/unmuted you" when call me success/hangeup
8. Fixed definition of ZooMtg.i18n wrong
9. Fixed co-host call rename/muteAll/expel/record/lockMeeting/putOnHold API no privilege

## Enhancements
1. polling switcher split meeting and webinar
2. remove default load language resource cause 404
3. Add setSupportLanguage api


## version 1.8.5
## Add
1. support for Breakout Rooms.
2. support for Polling.
3. support for Live Transcription.
4. support for the host to use the Host key to claim the meeting as a host when meeting no host
5. support reclaim host for joined use (role=1)
6. support to assign new hosts before leaving the meeting.
7. support for authentication names for starting and joining meetings from China.
8. new AES-GCM encryption and decryption audio support.
9. support for logging out integrating within Zoom for authentication meeting.
10. init API add Enable/Disable Breakout Rooms and Polling option

## Enhancements
1. Redesigned the Report a user in-meeting form.
2. Remove Jquery. all $.i18n -> ZoomMtg.i18n
3. Provided es5 support within the npm version.
4. multi-lang need manual load
   
## Bug Fixes
1. Fixed bug that displays black screen when host starts screen sharing.
2. Fixed UI issues where the Join Computer Audio button does not display properly within the small window.
3. Fixed UI issue where Active speaker is covered by speaker name within the small window.
4. Fixed issue where a user clicks Leave meeting and leave url does not work.
5. Fixed issue where clicking Phone call buttons returns error & black screen.
6. Fixed API issue where isSupportVA false.
7. Fixed API showMeetingHeader false in waiting room black screen
8. Fixed UI issue where “Guest” title shows for all non hosts.


## version 1.8.3
## Bug Fixes
1. Fixed phone Passcode Missing
2. Fixed enter/exit fullscreen after leaving meeting in safari(ipad)
3. Fixed text overflows issue for some language
4. Fixed enhance download wasm files timeout issue.
5. Fixed auto hide "talk" text area for IE11
6. Fixed automatically sort raised hands to the top(me->host->co-host->raised->others)
7. Fixed unexcept "The host unmuted you" after call me success
8. Fixed Japanese translation for the waiting room.


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
4. Enhance language parameter wc_already_joined_by_telephone.

## Bug Fixes
Fixed issue for Safari not able to open camera.
Fixed issue for removing Session Storage


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
1. Remove rwcEndpoint
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
