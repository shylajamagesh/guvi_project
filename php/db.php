<?php

$conn = new mysqli(
    "localhost",
    "root",
    "",
    "guvi_project"
);

if($conn->connect_error){

    die("Database Connection Failed");

}

?>