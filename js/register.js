$(document).ready(function(){

    $("#registerBtn").click(function(){

        let name = $("#name").val();

        let email = $("#email").val();

        let password = $("#password").val();

        $.ajax({

            url: "php/register.php",

            type: "POST",

            data: {

                name: name,

                email: email,

                password: password

            },

            success: function(response){

                alert(response);

                window.location.href = "login.html";

            }

        });

    });

});