<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);



//query and get all clients
$query = $mysqli->prepare("SELECT * FROM  clients " );
$query->execute();

$array = $query->get_result();


// Get the result
while($a = $array->fetch_assoc())
{
    $response[] = $a;
}


// Display top 5 views
$json = json_encode($response);
echo $json;

?>
