<?php

include "mongo.php";
include "redis.php";

$token = $_POST['token'];
$user_id = $redis->get($token);

if(!$user_id){
    echo "Invalid Session";
    exit;
}

$data = [
    "user_id" => $user_id,
    "age" => $_POST['age'],
    "dob" => $_POST['dob'],
    "contact" => $_POST['contact'],
    "address" => $_POST['address']
];

$collection->updateOne(
    ["user_id" => $user_id],
    ['$set' => $data],
    ["upsert" => true]
);

echo "Profile Updated Successfully";

?>