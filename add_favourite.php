<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client = $_POST["client_user_id"];
$product = $_POST["product_id"];

$query = $mysqli->prepare("INSERT INTO client_favorite_products(user_client_id, product_id ) 
VALUES (?, ?)");
$query->bind_param("ss", $client, $product);
$query->execute();
?>