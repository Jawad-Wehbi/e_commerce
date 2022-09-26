<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

// prepare client cart and product id's
$cart = $data["cart_id"];
$product = $data["product_id"];
// inserting into the carts table
$query = $mysqli->prepare("INSERT INTO carts_has_products ( cart_id, product_id) VALUES(?,?)");
$query->bind_param("ss", $cart, $product);
$query->execute();
// displaying a success message
$response = [];
$response["success"] = true;

echo json_encode($response);
?>
