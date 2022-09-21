<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$name = $_POST["client_name"];
$email = $_POST["client_email"];
$id = $_POST["client_id"];
$pass = hash("sha256" ,$_POST["client_name"]);

$query = $mysqli->prepare("INSERT INTO clients (user_id, cart_id, client_name, client_email , client_id, client_password ) 
VALUES (?, ?, ?, ?) FROM users INNER JOIN clients ON users.id = clients.user_id ");
$query->bind_param("ssss", $name, $email, $id, $password);
$query->execute();
?>
