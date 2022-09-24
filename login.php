<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$email = $_POST["email"];
// $password = hash("sha256", $_POST["password"]);
$password = $_POST["password"];

$query = $mysqli->prepare("SELECT * FROM users WHERE email = ? and password = ? LIMIT 1");
$query->bind_param("ss", $email, $password);
$query->execute();

$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>
