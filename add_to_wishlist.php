<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client = $_POST["client_user_id"];
$product = $_POST["product_id"];
$price = $_POST["price"];

$query = $mysqli->prepare("INSERT INTO client_add_products_to_wishlist (client_user_id , product_id , price) VALUES(?,?,?)");
$query->bind_param("sss", $client, $product, $price);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response)
?>
