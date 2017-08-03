(function(){

    document.getElementById('join_meeting').addEventListener('click', function(e){

        e.preventDefault();

        if(!this.form.checkValidity()){
            alert("Enter Name and Meeting Number");
            return false;
        }

        var meeting_number = document.getElementById('meeting_number').value;

        var signature = ZoomMtg.generateSignature({
            meetingNumber: meeting_number,
            apiKey: 'YOUR_API_KEY',
            apiSecret: 'YOUR_API_SECRET',
            role: 0
        });

        ZoomMtg.init({
            debug: true,
            leaveUrl: 'http://www.zoom.us',
            success: function () {
                ZoomMtg.join(
                    {
                        meetingNumber: meeting_number,
                        userName: document.getElementById('display_name').value,
                        signature: signature,
                        apiKey: 'YOUR_API_KEY'
                    }
                );

            }
        });

    });

})();