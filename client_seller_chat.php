<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client_user_id = $_POST["client_user_id"];
$seller_user_id = $_POST["seller_user_id"];
$text = $_POST["text"];

$query = $mysqli->prepare("INSERT INTO clients_sellers_chat(client_user_id,seller_user_id,text) VALUE (?,?,?) ");
$query->bind_param("iis", $client_user_id , $seller_user_id,$text);
$query->execute();


$response = [];
$response["success"] = true;

echo json_encode($response);
?>