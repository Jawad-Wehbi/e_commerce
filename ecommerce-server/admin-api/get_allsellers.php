<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");


//query and get all clients
$query = $mysqli->prepare("SELECT * FROM  sellers " );
$query->execute();

$array = $query->get_result();

$response = [];
// Get the result
while($a = $array->fetch_assoc())
{
    $response[] = $a;
}


// Display all clients
$json = json_encode($response);
echo $json;

?>
