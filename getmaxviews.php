<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare category_id from the user



//query and get the maximum number of views
$query = $mysqli->prepare("SELECT max(nb_of_views)as maxviews,id FROM  products ");
$query->execute();


// Get the result
$return = $query -> get_result();
$result = $return -> fetch_assoc();

// Display max views
$response = [];
$response["success"] = true;
echo json_encode($result['maxviews']);

?>
