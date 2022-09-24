<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare values
$ad_id = $_POST["ad_id"];
$date_of_release = $_POST["date_of_release"];
$date_of_expiration = $_POST["date_of_expiration"];
$product_id = $_POST["product_id"];
// $name = $_POST["name"];
// $img = $_POST["img"];
// $description = $_POST["description"];
$seller_user_id = $_POST["seller_user_id"];


//insert code and value into the  discount_codes table
$query = $mysqli->prepare("INSERT INTO sellers_upload_ads(seller_user_id, ad_id) VALUE (?,?)");
$query->bind_param("ss", $seller_user_id ,$ad_id);
$query->execute();

// insert ad expiration and realease dates in  the ads table
$query = $mysqli->prepare("INSERT INTO ads(id, date_of_release,date_of_expiration ) VALUE (?,?,?)");
$query->bind_param("sss", $ad_id ,$date_of_release,$date_of_expiration);
$query->execute();

// assign the ad to product
$query = $mysqli->prepare("UPDATE  products SET ads_id=? WHERE product_id=? ");
$query->bind_param("ss",$ad_id,$product_id);
$query->execute();




//display success output in case the add  was created
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
