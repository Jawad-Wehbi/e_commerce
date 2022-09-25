<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// prepare needed variables
$name = $data["client_name"];
$email = $data["client_email"];
$pass = hash("sha256" ,$data["client_name"]);
// updating the clients table
$query = $mysqli->prepare("UPDATE clients SET client_name = ?, client_email = ?, client_password = ?, ");
$query->bind_param("sss", $name, $email, $password);
$query->execute();
?>
