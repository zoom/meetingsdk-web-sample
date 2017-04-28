# webclient

Zoom offers a web based HTML5 client that is used in environments where the
end users cannot download zoom desktop clients due to internal IT restrictions or
in very low bandwidth environments. The web client lets end users join a meeting,
receive screen share from other attendees, join the meeting through the phone and
leave the meeting. Zoom has added a JS SDK as part of our developer platform to
enable developers to embed this into their web apps. Key functions that are
exposed include: init meeting config, join meeting, show/hide invite function,
show/hide meeting header, get attendees list, call out, invite by phone, mute,
unmute, mute all, unmute all, rename, expel, record, lock meeting, leave meeting,
end meeting.

visit zoom developer platform (https://zoom.us/developer) for details 

Supported Browsers:  Internet Explorer 10+, Google Chrome, Safari, and Mozilla Firefox with their latest version

Using the SDK  (Refer the sdk spec "webclient_v1.pdf" in the repo) 

  1. Include the src 
  <script src=” https://d24cgw3uvb9a9h.cloudfront.net/static/90077/js/api/zoommtg.js”></script>
  
  2. Check the sample java code on how to create a meeting signature - it's very straightforward to write it in java script or in other languages
  3. Check our REST API documentation to find out how to get the API key/secret and how to create meetings
 
