$(function () {
    $("#test").delegate("button", "click", function(){
        var type = $(this).attr("data-id");
        switch (type) {
            case "init":
                ZoomMtg.init({
                    debug: true,
                    leaveUrl: 'http://www.zoom.us'
                });
                break;

            case "join":
                ZoomMtg.join({
                    meetingNumber:,
                    userName: 'JSAPI',
                    passWord: '',
                    signature: '',
                    apiKey: ''
                });
                break;

            case "showInviteFunction":
                ZoomMtg.showInviteFunction({
                    show: false
                });
                break;

            case "showMeetingHeader":
                ZoomMtg.showMeetingHeader({
                    show: false
                });
                break;

            case "getAttendeeslist":
                ZoomMtg.getAttendeeslist({});
                break;

            case "callOut":
                ZoomMtg.callOut({
                    phoneNumber: ''
                });
                break;

            case "inviteByPhone":
                ZoomMtg.inviteByPhone({
                    phoneNumber: '',
                    userName: ''
                });
                break;

            case 'mute':
                ZoomMtg.mute({
                    userId: ,
                    mute: true
                });
                break;

            case 'muteAll':
                ZoomMtg.muteAll({
                    muteAll: true
                });
                break;

            case 'rename':
                ZoomMtg.rename({
                    userId: ,
                    oldName: '',
                    newName: ''
                });
                break;

            case 'expel':
                ZoomMtg.expel({
                    userId: 
                });
                break;

            case 'record':
                ZoomMtg.record({
                    record: true
                });
                break;

            case 'lockMeeting':
                ZoomMtg.lockMeeting({
                    lockMeeting: true
                });
                break;

            case 'leaveMeeting':
                ZoomMtg.leaveMeeting({});
                break;

            case 'endMeeting':
                ZoomMtg.endMeeting({});
                break;

            default:
                console.log(">>>>>>default<<<<<<<<<");
        }
    });

});
