<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

//prepare seller inputs and insert their values
$value = $data["value"];
$code = $data["code"];
$seller_user_id = $data["seller_user_id"];


//insert code and value into the  discount_codes table
$query = $mysqli->prepare("INSERT INTO discount_codes(value, code,seller_user_id) VALUE (?,?,?)");
$query->bind_param("sss", $value , $code,$seller_user_id);
$query->execute();


//display success output in case the discount code  was created
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
