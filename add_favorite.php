<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');


include("connections.php");
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
// prepare client and product id's
$client = $data["client_user_id"];
$product = $data["products_id"];
// selecting into the carts table
$query2 = $mysqli->prepare("SELECT client_user_id, product_id FROM client_favorite_products WHERE client_user_id = ? AND product_id = ?");
$query2->bind_param("ii", $client, $product);
$query2->execute();
$result2 = $query2->get_result();
// checking if the product already exists
// returning false if it exits
if(mysqli_num_rows($result2)>0) {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}
// inserting product if it doesn't exit
else {
    $query = $mysqli->prepare("INSERT INTO client_favorite_products(client_user_id , product_id) VALUES(?,?)");
    $query->bind_param("ii", $client, $product);
    $query->execute();
    $response = [];
    $response["success"] = true;
echo json_encode($response);
}
?>