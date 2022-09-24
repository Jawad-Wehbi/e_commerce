<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$name = $_POST["client_name"];
$email = $_POST["client_email"];
// $id = $_POST["client_id"];
$pass = hash("sha256" ,$_POST["client_name"]);
$image = $_POST["img"];
$cart = $_POST["cart_id"];
$type = "client";

$query1 = $mysqli->prepare("INSERT INTO users (email, password , user_type) 
VALUES (?, ? ,?)");
$query1->bind_param("sss", $email, $pass, $type);
$query1->execute();



$query2 = $mysqli->prepare("INSERT INTO clients (user_id , cart_id, client_name, client_email , client_password , img ) 
VALUES (?, ?, ?, ?) FROM users INNER JOIN clients ON users.id = clients.user_id ");
$query2->bind_param("ssss", $cart, $name, $email, $pass, $image);
$query2->execute();

?>

