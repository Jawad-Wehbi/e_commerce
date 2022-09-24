<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client = $_POST["client_id"];
$seller = $_POST["seller_id"];
$text = $_POST["text"];

$query = $mysqli->prepare("INSERT INTO clients_sellers_chat(text)
VALUE (?) WHERE client_user_id = ?, seller_user_id = ?");
$query->bind_param("sii",$text , $client , $seller);
$query->execute();

$return = $query -> get_result();
$result = $return -> fetch_assoc();

$response = [];
$response["success"] = true;
echo json_encode($result);
?>