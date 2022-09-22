<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client = $_POST["client_id"];
$product = $_POST["product_id"];

$query = $mysqli->prepare("SELECT name, image, price, nb_of_views, rating, category, description
 FROM products,users_view_products WHERE client_id = ?, product_id = ?");
$query->bind_param("ss", $client , $product);
$query->execute();

?>