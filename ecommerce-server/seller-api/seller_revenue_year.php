<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// get seller name
$seller_user_id = $data["seller_user_id"];
$checkout_date = date('y:m:d',strtotime('-1 year'));

//Sum product of products prices for 1 year for the seller
$query = $mysqli->prepare("SELECT  SUM(checkout_history.price*checkout_history.quantity_sold) as revenue , products.seller_user_id  FROM checkout_history,products  WHERE (checkout_history.product_id= products.product_id and products.seller_user_id=? and checkout_history.checkout_date >= ?)");
$query->bind_param("ss", $seller_user_id,$checkout_date);
$query->execute();


$return = $query -> get_result();
$result = $return -> fetch_assoc();



$response = [];
$response["success"] = true;
echo json_encode($result);



?>
