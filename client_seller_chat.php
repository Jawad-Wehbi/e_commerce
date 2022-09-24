<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$client_user_id = $data["client_user_id"];
$seller_user_id = $data["seller_user_id"];
$text = $data["text"];

$query = $mysqli->prepare("INSERT INTO clients_sellers_chat(client_user_id,seller_user_id,text) VALUE (?,?,?) ");
$query->bind_param("iis", $client_user_id , $seller_user_id,$text);
$query->execute();


$response = [];
$response["success"] = true;

echo json_encode($response);
?>