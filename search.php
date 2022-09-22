<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$search = $_POST["name"];
$search = "%".$search."%";

$query = $mysqli->prepare("SELECT categories_id, name , price , nb_of_views , image FROM products WHERE name LIKE ?");
$query->bind_param("s", $search);
$query->execute();

$array = $query->get_result();


$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

echo json_encode($response);

?>