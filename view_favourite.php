<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client = $_POST["client_user_id"];

$query = $mysqli->prepare("SELECT name, image, price, nb_of_views, rating, category
 FROM products INNER JOIN client_favorite_products ON products.id = client_favorite_products.product_id , client_id = ?");
$query->bind_param("s", $client );
$query->execute();
?>