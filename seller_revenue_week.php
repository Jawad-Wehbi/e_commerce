<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

// get product name from the user
$seller_user_id = $_POST["seller_user_id"];
$checkout_date = date('y:m:d',strtotime('-7 days'));

//Sum product from the view products table
$query = $mysqli->prepare("SELECT  SUM(checkout_history.price) as revenue , products.seller_user_id  FROM checkout_history,products  WHERE (checkout_history.product_id= products.id and products.seller_user_id=? and checkout_history.checkout_date >= ?)");
$query->bind_param("ss", $seller_user_id,$checkout_date);
$query->execute();


$return = $query -> get_result();
$result = $return -> fetch_assoc();



$response = [];
$response["success"] = true;
echo json_encode($result);



?>
