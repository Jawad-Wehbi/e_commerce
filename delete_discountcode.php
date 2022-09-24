<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

// get discount_id from the user
$id = $_POST["id"];
$discount_code_id = $_POST["discount_code_id"];
$seller_user_id = $_POST["seller_user_id"];
// discount_code_id

//DELETE discount code from discount code tables from the products table
$query = $mysqli->prepare("DELETE  FROM discount_codes WHERE id=? and seller_user_id=?");
$query->bind_param("ss",$id,$seller_user_id);
$query->execute();

//Query and delete discount code
$query = $mysqli->prepare("UPDATE  products SET  discount_code_id=null WHERE discount_code_id=? and seller_user_id=?");
$query->bind_param("ss", $discount_code_id ,$seller_user_id );
$query->execute();


?>
