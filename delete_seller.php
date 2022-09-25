<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


//prepare inputs from the user
$user_id = $data["user_id"];


//Update the sellers name in the database
$query = $mysqli->prepare("DELETE  FROM sellers WHERE user_id=?");
$query->bind_param("ss",$user_id );
$query->execute();

$query = $mysqli->prepare("DELETE  FROM users WHERE id=?");
$query->bind_param("s",$user_id );
$query->execute();


//display success output
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
