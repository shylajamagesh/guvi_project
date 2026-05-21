<?php

include "mongo.php";
include "redis.php";

$token = $_POST['token'];
$user_id = $redis->get($token);

if(!$user_id){
    echo json_encode(["status" => "invalid"]);
    exit;
}

$profile = $collection->findOne(["user_id" => $user_id]);

if($profile){
    echo json_encode([
        "status" => "success",
        "age" => $profile["age"],
        "dob" => $profile["dob"],
        "contact" => $profile["contact"],
        "address" => $profile["address"]
    ]);
} else {
    echo json_encode(["status" => "empty"]);
}

?>