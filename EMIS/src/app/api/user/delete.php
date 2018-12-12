<?php

//required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//get database connection class
include_once '../config/database.php';
//get the user class
include_once '../objects/user.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

//get id of the user to be edited
$data = json_decode(file_get_contents("php://input"));

$user->id = $data->id; //set the id of the user to be edited

if($user->delete()){


	http_response_code(200); //code = ok

	//then tell the user
	echo json_encode(array("message" => "User was deleted."));
}
else{
	http_response_code(503); //service unavailable
	echo json_encode(array("message" => "Unable to delete user."));
}
?>
