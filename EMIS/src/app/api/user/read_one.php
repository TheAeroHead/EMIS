/*this php script will read one user from the database
 */

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Credentials: true");
header("Content-Type: application/json");

include_once '../config/database.php';
include_once '../objects/user.php';

$database = new Database();
$db = $database->getConnection();
$user = new User($db);

//set id property of record to read
$user->id = isset($_GET['id']) ? $_GET['id'] : die();

//read the details of user
$user->readOne();

if($user->firstname!=null){
	//create array
	$user_arr = array(
		"id" => $user->id,
		"firstname" => $user->firstname,
		"lastname" => $user->lastname,
		"email" => $user->email,
		"age" => $user->age,
		"access" => $user->access
	);

	http_response_code(200);
	echo json_encode($user_arr);
}
else{
	http_response_code(404); //not found
	echo json_encode(array("message" => "Product does not exist."));
}
?>
