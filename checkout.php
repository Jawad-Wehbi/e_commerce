<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$checkout = $_POST["checkout_date"];

$query = $mysqli->prepare("INSERT INTO carts_has_products (checkout_date) VALUES(?)");
$query->bind_param("s", $checkout);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response)
?>
