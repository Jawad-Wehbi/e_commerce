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
$img = $data["img"];

//insert user into the users table
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

//get user id
$client_user_id=$response2[0]['id'];



//query to create a cart for the user
$query3 = $mysqli->prepare("INSERT INTO `carts` (`id`) VALUES (NULL);");
$query3->execute();
$response3 = [];

while($a3 = $array3->fetch_assoc()){
    $response3[] = $a3;
}

$cart_user_id=$response3[0]['id'];






//query to create client
$query4= $mysqli->prepare("INSERT INTO clients(user_id,cart_id,client_name,client_email,client_password) VALUE (?,?,?,?,?,?)");
$query4->bind_param("ssss",$client_user_id,$cart_user_id,$name, $email , $password,$img);
$query4->execute();





//display success output in case the category was added
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
