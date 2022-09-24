<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


//prepare category_id from the user
$categories_id = $data["categories_id"];
$product_id = $data["product_id"];

//insert category_id into the products table to add the product to the category
$query = $mysqli->prepare("UPDATE  products SET categories_id =? WHERE product_id=?");
$query->bind_param("ss",$categories_id, $product_id );
$query->execute();


//display success output in case the product was added to the category
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
