<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare category_id from the user



//insert category_id into the products table to add the product to the category
$query = $mysqli->prepare("SELECT max(nb_of_views)as maxviews,id FROM  products ");
$query->execute();


//display success output in case the product was added to the category
$return = $query -> get_result();
$result = $return -> fetch_assoc();


$response = [];
$response["success"] = true;
echo json_encode($result['maxviews']);

?>
