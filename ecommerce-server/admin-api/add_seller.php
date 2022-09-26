<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

//prepare seller inputs and insert their values
$name=$data["name"];
$email = $data["email"];
$password = $data["password"];
$user_type = $data["user_type"];


//insert category into the  categories table
$query = $mysqli->prepare("INSERT INTO users(email,password,user_type) VALUE (?,?,?)");
$query->bind_param("sss", $email , $password,$user_type);
$query->execute();



//get user id to set the same for the seller
$query2=$mysqli->prepare("SELECT id FROM users WHERE email = ?" );
$query2->bind_param("s",$email);
$query2->execute();
$array2 = $query2->get_result();

$response2 = [];

while($a2 = $array2->fetch_assoc()){
    $response2[] = $a2;
}

$seller_user_id=$response2[0]['id'];



$query3= $mysqli->prepare("INSERT INTO sellers(user_id,seller_name,seller_email,seller_password) VALUE (?,?,?,?)");
$query3->bind_param("ssss",$seller_user_id,$name, $email , $password);
$query3->execute();





//display success output in case the category was added
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
