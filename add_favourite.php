<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client_user_id = $_POST["client_user_id"];
$product_id = $_POST["product_id"];

$query = $mysqli->prepare("INSERT INTO client_favorite_products (client_user_id, product_id ) 
VALUES (?, ?)");
$query->bind_param("ii", $client_user_id, $product_id);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response)
?>