<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


// get discount_id from the user
$id = $data["id"];
$discount_code_id = $data["discount_code_id"];
$seller_user_id = $data["seller_user_id"];


//DELETE discount code from discount code tables from the products table
$query = $mysqli->prepare("DELETE  FROM discount_codes WHERE id=? and seller_user_id=?");
$query->bind_param("ss",$id,$seller_user_id);
$query->execute();

//Query and delete discount code
$query = $mysqli->prepare("UPDATE  products SET  discount_code_id=null WHERE discount_code_id=? and seller_user_id=?");
$query->bind_param("ss", $discount_code_id ,$seller_user_id );
$query->execute();


?>
