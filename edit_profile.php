<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$name = $_POST["client_name"];
$email = $_POST["client_email"];
$pass = hash("sha256" ,$_POST["client_name"]);

$query = $mysqli->prepare("UPDATE clients SET client_name = ?, client_email = ?, client_password = ?, ");
$query->bind_param("sss", $name, $email, $password);
$query->execute();
?>
