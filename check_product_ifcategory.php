<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

//prepare category_id and product_id from the user
$categories_id = $data["categories_id"];
$name = $data["name"];



//Check if product exists in category before adding
$query = $mysqli->prepare("SELECT (name) FROM products WHERE name=? and categories_id= ? ");
$query->bind_param("ss", $name, $categories_id);
$query->execute();

$result = $query -> get_result();

$num_rows = $result->num_rows;

if($num_rows != 0)
{
    // product already exists in category !
    echo json_encode(1);

    exit();
}

else {
    // product does not exist in category, you can proceed with adding it !
  echo json_encode(0);
}



?>
