$(document).ready(function(){

    let token = localStorage.getItem("token");

    if(!token){
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    $.ajax({
        url: "php/get_profile.php",
        type: "POST",
        data: {
            token: token
        },
        success: function(response){

            let data = JSON.parse(response);

            if(data.status === "success"){
                $("#age").val(data.age);
                $("#dob").val(data.dob);
                $("#contact").val(data.contact);
                $("#address").val(data.address);
            }
        }
    });

    $("#saveBtn").click(function(){

        let age = $("#age").val();
        let dob = $("#dob").val();
        let contact = $("#contact").val();
        let address = $("#address").val();

        if(age === "" || dob === "" || contact === "" || address === ""){
            alert("All fields required");
            return;
        }

        $.ajax({
            url: "php/save_profile.php",
            type: "POST",
            data: {
                token: token,
                age: age,
                dob: dob,
                contact: contact,
                address: address
            },
            success: function(response){
                alert(response);
            }
        });

    });

    $("#logoutBtn").click(function(){

        localStorage.removeItem("token");

        window.location.href = "login.html";

    });

});