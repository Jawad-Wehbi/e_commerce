<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$name = $data["client_name"];
$email = $data["client_email"];
// $id = $data["client_id"];
$pass = hash("sha256" ,$data["client_password"]);
// $img = $data["img"];
// $cart = $data["cart_id"];
$type = "client";

// $query = $mysqli->prepare("INSERT INTO `carts` (`id`) VALUES (NULL);");
// $cart_id=  $mysqli->prepare("SELECT * FROM carts ORDER BY id DESC LIMIT 1");
// echo json_encode($cart_id) ;






// creating user
$query = $mysqli->prepare("INSERT INTO users (email, password , user_type) 
VALUES (?, ? ,?)");
$query->bind_param("sss", $email, $pass, $type);
$query->execute();

// Creating client

$query= $mysqli->prepare("INSERT INTO clients (user_id, client_email,client_password)  (SELECT id,email,password from users where (email= $email))"); 
// $query2->bind_param("sssss",$returned_id,$cart,$name , $email, $pass);
$query->execute();

// $query2= $mysqli->prepare("INSERT INTO clients (user_id,cart_id, client_name, client_email,client_password)  VALUE(?,?,?,?,?)"); 
// $query2->bind_param("sssss",$returned_id,$cart,$name , $email, $pass);
// $query2->execute();

// $response = [];
// $response["success"] = true;

// echo json_encode($response)

// $query2 = $mysqli->prepare("INSERT INTO clients (user_id , cart_id, client_name, client_email , client_password , img ) 
// VALUES (?, ?, ?, ?) FROM users INNER JOIN clients ON users.id = clients.user_id ");
// $query2->bind_param("ssss", $cart, $name, $email, $pass, $image);
// $query2->execute();

?>

