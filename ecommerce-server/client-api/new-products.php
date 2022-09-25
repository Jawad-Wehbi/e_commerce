<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$query = $mysqli->prepare("SELECT P.id, P.product_name, P.image, P.price, C.category_name  FROM products AS P INNER JOIN categories AS C ON P.categories_id = C.id ORDER BY P.date DESC LIMIT 10");
$query->execute();
$array = $query->get_result();
$response = [];
while($a = $array->fetch_assoc()){
    $response[] = $a;
}
$json = json_encode($response);
echo $json;
?>