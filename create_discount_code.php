<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare seller inputs and insert their values
$value = $_POST["value"];
$code = $_POST["code"];
$seller_user_id = $_POST["seller_user_id"];


//insert code and value into the  discount_codes table
$query = $mysqli->prepare("INSERT INTO discount_codes(value, code,seller_user_id) VALUE (?,?,?)");
$query->bind_param("sss", $value , $code,$seller_user_id);
$query->execute();


//display success output in case the discount code  was created
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
