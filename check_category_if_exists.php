<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

//prepare check category name
$name = $_POST["name"];


//Check if category name exists before adding
$query = $mysqli->prepare("SELECT name FROM categories WHERE name=?");
$query->bind_param("s", $name);
$query->execute();

$result = $query -> get_result();

$num_rows = $result->num_rows;

if($num_rows != 0)
{
    // category already exists !
    echo json_encode(1);

    exit();
}

else {
    // category does not exist, you can proceed with adding one !
  echo json_encode(0);
}



?>
