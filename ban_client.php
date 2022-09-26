<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// prepare user inputs
$admins_user_id=$data["admins_user_id"];
$clients_user_id = $data["clients_user_id"];


//insert the admin who banned and the banned client IDs
$query = $mysqli->prepare("INSERT INTO admins_ban_clients(admins_user_id,clients_user_id) VALUE (?,?)");
$query->bind_param("ss", $admins_user_id , $clients_user_id);
$query->execute();



//display success output in case ban was successfull
$response = [];
$response["success"] = true;

echo json_encode($response);

?>
