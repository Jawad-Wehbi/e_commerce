<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");


$query = $mysqli->prepare("INSERT INTO `carts` (`id`) VALUES (NULL);");
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response)
?>