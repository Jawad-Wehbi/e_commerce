<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true); 

$category = $data["categories_id"];

$query = $mysqli->prepare("SELECT *  FROM products WHERE products.categories_id = ? ");
$query->bind_param("i", $category);
$query->execute();

$array = $query->get_result();
$response = [];while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);

echo $json;?>