<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//query and get the maximum number of views
$query = $mysqli->prepare("SELECT nb_of_views ,name,product_id FROM  products ORDER BY nb_of_views DESC LIMIT 5" );
$query->execute();
$array = $query->get_result();


// Get the result
while($a = $array->fetch_assoc())
{
    $response[] = $a;
}


// Display max views
$json = json_encode($response);
echo $json;

?>
