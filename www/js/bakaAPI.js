function bakaAPI(url) {
    var func = {
        login: function(username,password) {
            var data = {}
            data.client_id = "ANDR"
            data.grant_type="password"
            data.username = username
            data.password = password


            $.ajax({
                type: "POST",
                url: url + "/api/login",
                data: data,
                contentType:"application/x-www-form-urlencoded",
                dataType: "application/json",
                success: function (response) {
                    console.log(response.responseText)
                },
                error: function (response) {
                    console.log(JSON.parse(response.responseText)["error_description"])
                }
            });

        }
    }
    return func
}