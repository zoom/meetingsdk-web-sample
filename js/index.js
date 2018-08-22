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
  
        var meetConfig = {
          apiKey: API_KEY,
          apiSecret: API_SECRET,
          meetingNumber: parseInt(document.getElementById('meeting_number').value),
          userName: document.getElementById('display_name').value,
          passwd: "",
          leaveUrl: "https://zoom.us",
          role: 1
        };
  
  
        var signature = ZoomMtg.generateSignature({
            meetingNumber: meetConfig.meetingNumber,
            apiKey: meetConfig.apiKey,
            apiSecret: meetConfig.apiSecret,
            role: meetConfig.role,
            success: function(res){
                console.log(res.result);
            }
        });
  
        ZoomMtg.init({
            leaveUrl: 'http://www.zoom.us',
            isSupportAV: true,
            success: function () {
                ZoomMtg.join(
                    {
                        meetingNumber: meetConfig.meetingNumber,
                        userName: meetConfig.userName,
                        signature: signature,
                        apiKey: meetConfig.apiKey,
                        success: function(res){
                            console.log('join meeting success');
                            document.getElementById('nav-tool').style.display = 'none';
                        }
                    }
                );
  
            }
        });
  
    });
  
  })();