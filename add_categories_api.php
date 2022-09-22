<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare seller inputs and insert their values
$name = $_POST["name"];
$description = $_POST["description"];
$seller_user_id = $_POST["seller_user_id"];


//insert category into the  categories table
$query = $mysqli->prepare("INSERT INTO categories(name, description,seller_user_id) VALUE (?,?,?)");
$query->bind_param("sss", $name , $description,$seller_user_id);
$query->execute();


//display success output in case the category was added
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
