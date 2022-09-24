<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$cart = $data["cart_id"];

$query = $mysqli->prepare("SELECT product_id FROM carts_has_products WHERE cart_id = '$cart'");
// $query->bind_param("sss", $cart, $client, $product);
$query->execute();

$product = ("SELECT name, image, price, rating, category FROM products WHERE product_id = 'product_id'");
$product->execute();

$array = $product->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>
