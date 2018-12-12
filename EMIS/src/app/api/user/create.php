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

//get posted data
$data = json_decode(file_get_contents("php://input"));

//make sure data is not empty
if(
	!empty($data->id)&&
	!empty($data->firstname)&&
	!empty($data->lastname)&&
	!empty($data->email)&&
        !empty($data->age)&&
	!empty($data->access)
){
	//set the user property values
	$user->id = $data->id;
	$user->firstname = $data->firstname;
	$user->lastname = $data->lastname;
	$user->email = $data->email;
	$user->age = $data->age;
	$user->access = $data->access;

	//create the user
	if($user->create()){
		http_response_code(201); //code = created

		//then tell the user
		echo json_encode(array("message" => "User was created."));
	}
	else{
		http_response_code(503); //service unavailable
		echo json_encode(array("message" => "Unable to create user."));
	}
}
else{
	//if data is incomplete
	http_response_cod(400); //bad request
	echo json_encode (array("message" => "Unable to create user. Data is incomplete");
}
?>
