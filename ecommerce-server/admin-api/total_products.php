<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


$query = $mysqli->prepare("SELECT COUNT(product_id) as total_products FROM products");
$query->execute();


$return = $query -> get_result();
$result = $return -> fetch_assoc(); 


$response = [];
$response["success"] = true;
echo json_encode($result['total_products']);

?>
