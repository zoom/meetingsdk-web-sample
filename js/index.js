(function(){

    var API_KEY = 'YOUR_API_KEY';

    /**
     * NEVER PUT YOUR ACTUAL API SECRET IN CLIENT SIDE CODE, THIS IS JUST FOR QUICK PROTOTYPING
     * The below generateSignature should be done server side as not to expose your api secret in public
     * You can find an eaxmple in PHP here: https://gist.github.com/joshuawoodward/7574df3df9a089e2663582a2cf9f188b
     */
    var API_SECRET = 'YOUR_API_SECRET';

    document.getElementById('join_meeting').addEventListener('click', function(e){

        e.preventDefault();

        if(!this.form.checkValidity()){
            alert("Enter Name and Meeting Number");
            return false;
        }

        var meeting_number = document.getElementById('meeting_number').value;

        var signature = ZoomMtg.generateSignature({
            meetingNumber: meeting_number,
            apiKey: API_KEY,
            apiSecret: API_SECRET,
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
                        apiKey: API_KEY
                    }
                );

            }
        });

    });

})();