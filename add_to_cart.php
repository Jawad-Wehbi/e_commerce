<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");


$client = $data["client_id"];
$cart = $data["cart_id"];
$product = $data["product_id"];

$query = $mysqli->prepare("INSERT INTO carts_has_products ( cart_id, client_id, product_id) VALUES(?,?,?)");
$query->bind_param("sss", $cart, $client, $product);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
?>