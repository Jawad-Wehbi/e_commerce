<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$client = $data["client_id"];
$product = $data["product_id"];

$query = $mysqli->prepare("SELECT name, image, price, nb_of_views, rating, category
 FROM products,users_view_products WHERE client_id = ?, product_id = ?");
$query->bind_param("ss", $client , $product);
$query->execute();

$return = $query -> get_result();
$result = $return -> fetch_assoc();

$response = [];
$response["success"] = true;
echo json_encode($result);
?>