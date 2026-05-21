$(document).ready(function(){

    $("#loginBtn").click(function(){

        let email = $("#email").val();
        let password = $("#password").val();

        if(email === "" || password === ""){
            alert("All fields required");
            return;
        }

        $.ajax({
            url: "php/login.php",
            type: "POST",
            data: {
                email: email,
                password: password
            },
            success: function(response){

                let data = JSON.parse(response);

                if(data.status === "success"){

                    localStorage.setItem("token", data.token);

                    alert("Login Successful");

                    window.location.href = "profile.html";

                }
                else{

                    alert("Invalid Email or Password");

                }

            }
        });

    });

});