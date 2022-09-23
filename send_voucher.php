<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connections.php");

$client1 = $_POST["client_user_id"];
$client2 = $_POST["client_user_id1"];
$voucher = $_POST["vouchers_id"];

$query = $mysqli->prepare("INSERT INTO clients_send_voucher_to_clients (client_user_id , client_user_id1, vouchers_id) VALUES(?,?,?)");
$query->bind_param("sss", $client1, $client2, $voucher);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response)
?>
