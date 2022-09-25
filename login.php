<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
// prepare needed variables
$email = $data["email"];
$password = $data["password"];
// selecting from the users table 
$query = $mysqli->prepare("SELECT * FROM users WHERE email = ? and password = ? LIMIT 1");
$query->bind_param("ss", $email, $password);
$query->execute();
// returning the results
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>
