        var $id = function(id) { return document.getElementById(id); };
        AWS.config.region = "ap-northeast-1";
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: "ap-northeast-1:7a277149-9693-42d5-af02-75930f859d19"});
        AWS.config.credentials.get(function(err) {
            if (!err) {
                console.log("Cognito Identify Id: " + AWS.config.credentials.identityId);
            }
        });

        function uploadFile() {
            AWS.config.region = 'ap-northeast-1';
            var s3BucketName = "pd-form-data";
            var now = new Date();
            var obj = {"title":$id("title").value, "mail":$id("mail").value ,"contents":$id("contents").value, "date": now.toLocaleString()};
            var s3 = new AWS.S3({params: {Bucket: s3BucketName}});
            var blob = new Blob([JSON.stringify(obj, null, 2)], {type:'text/plain'});
            s3.putObject({Key: "uploads/" +now.getTime()+".txt", ContentType: "text/plain", Body: blob, ACL: "public-read"},
            function(err, data){
                if(data !== null){
                    alert("お問い合わせ完了致しました");
                }
                else{
                    alert("Upload Failed" + err.message);
                }
            });
        }
