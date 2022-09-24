<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$client = $data["client_id"];
$seller = $data["seller_id"];
// $text = $data["text"];

$query = $mysqli->prepare("SELECT text ,FROM clients_sellers_chat WHERE client_user_id = ?, seller_user_id = ?");
$query->bind_param("ii",$client , $seller);
$query->execute();


$array = $product->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;
?>