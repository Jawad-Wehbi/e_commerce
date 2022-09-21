<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$email = $_POST["client_email"];
$password = hash("sha256", $_POST["client_password"]);

$query = $mysqli->prepare("SELECT id FROM clients WHERE client_email = ? and client_password = ? LIMIT 1");
$query->bind_param("ss", $email, $password);
$query->execute();

$return = $query -> get_result();
$result = $return -> fetch_assoc();


echo json_encode($result['id']);

?>