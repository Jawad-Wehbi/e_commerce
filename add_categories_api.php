<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$name = $_POST["name"];
$description = $_POST["description"];
$seller_id = $_POST["seller_id"];

$query = $mysqli->prepare("INSERT INTO categories(name, description,seller_id) VALUE (?,?,?)");
$query->bind_param("sss", $name , $description,$seller_id);
$query->execute();



$response = [];
$response["success"] = true;

echo json_encode($response);

?>
