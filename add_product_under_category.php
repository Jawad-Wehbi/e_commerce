<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare category_id from the user
$categories_id = $_POST["categories_id"];
$id = $_POST["id"];

//insert category_id into the products table to add the product to the category
$query = $mysqli->prepare("UPDATE  products SET categories_id =? WHERE id=?");
$query->bind_param("ss",$categories_id, $id );
$query->execute();


//display success output in case the product was added to the category
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
