<?php

include "db.php";
include "redis.php";

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if($result->num_rows > 0){

    $user = $result->fetch_assoc();

    if(password_verify($password, $user['password'])){

        $token = bin2hex(random_bytes(16));

        $redis->set($token, $user['id']);
        $redis->expire($token, 3600);

        echo json_encode([
            "status" => "success",
            "token" => $token
        ]);

    } else {
        echo json_encode(["status" => "failed"]);
    }

} else {
    echo json_encode(["status" => "failed"]);
}

?>