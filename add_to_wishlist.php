<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$client = $data["client_user_id"];
$product = $data["products_id"];
$price = $data["price"];

$query = $mysqli->prepare("INSERT INTO client_add_products_to_wishlist (client_user_id , products_id , price) VALUES(?,?,?)");
$query->bind_param("sss", $client, $product, $price);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response)
?>
