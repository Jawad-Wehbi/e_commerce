<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$seller_user_id = $data["seller_user_id"];


// $seller_user_id = $_POST["seller_user_id"];
//query and get the maximum number of views
$query = $mysqli->prepare("SELECT nb_of_views ,name,product_id FROM  products WHERE seller_user_id=? ORDER BY nb_of_views DESC LIMIT 5  " );
$query->bind_param("s",$seller_user_id);
$query->execute();

$array = $query->get_result();


// Get the result
while($a = $array->fetch_assoc())
{
    $response[] = $a;
}


// Display top 5 views
$json = json_encode($response);
echo $json;

?>
