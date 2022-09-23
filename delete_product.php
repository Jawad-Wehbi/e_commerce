<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

// get product name from the user
$name = $_POST["name"];


//DELETE product from the view products table
$query = $mysqli->prepare("DELETE  FROM users_view_products WHERE (SELECT from products(product_id) WHERE name=?) ");
$query->bind_param("s",$name);
$query->execute();

//DELETE product from the client favorite table
$query = $mysqli->prepare("DELETE  FROM client_favorite_products WHERE (SELECT from products(product_id) WHERE name=?) ");
$query->bind_param("s",$name);
$query->execute();

//DELETE product from the products wishlist
$query = $mysqli->prepare("DELETE  FROM client_add_products_to_wishlist WHERE (SELECT from products(product_id) WHERE name=?) ");
$query->bind_param("s",$name);
$query->execute();

// //DELETE product from the products table
// $query = $mysqli->prepare("DELETE  FROM products WHERE name=?");
// $query->bind_param("s",$name);
// $query->execute();




//display success output in case the product was added to the category
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
