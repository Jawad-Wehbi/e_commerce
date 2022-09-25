<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// get product name from the user
// $name = $data["name"];
$product_id = $data["product_id"];

//DELETE product from the view products table
$query = $mysqli->prepare("DELETE  FROM users_view_products WHERE (SELECT product_id FROM products WHERE product_id = ?) ");
$query->bind_param("s", $product_id);
$query->execute();

//DELETE product from the client favorite table
$query = $mysqli->prepare("DELETE  FROM client_favorite_products  WHERE (SELECT product_id FROM products WHERE product_id = ?) ");
$query->bind_param("s",$product_id);
$query->execute();

//DELETE product from the products wishlist
$query = $mysqli->prepare("DELETE  FROM client_add_products_to_wishlist  WHERE (SELECT product_id FROM products WHERE product_id = ?) ");
$query->bind_param("s",$product_id);
$query->execute();

//DELETE product from the products cart
$query = $mysqli->prepare("DELETE  FROM carts_has_products  WHERE (SELECT product_id FROM products WHERE product_id = ?) ");
$query->bind_param("s",$product_id);
$query->execute();

//DELETE product from the products table
$query = $mysqli->prepare("DELETE  FROM products WHERE product_id=?");
$query->bind_param("s",$product_id);
$query->execute();




//display success output in case the product was added to the category
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
