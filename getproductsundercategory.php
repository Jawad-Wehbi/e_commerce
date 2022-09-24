<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare variables
$categories_id = $_POST["categories_id"];

//query and get the maximum number of views
$query = $mysqli->prepare("SELECT * FROM  products WHERE categories_id = ?" );
$query->bind_param("s",$categories_id);
$query->execute();
$array = $query->get_result();


// Get the result
while($a = $array->fetch_assoc())
{
    $response[] = $a;
}


// Display all products with details
$json = json_encode($response);
echo $json;

?>
