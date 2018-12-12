/* this script shows headers about who can read this file and the type of content
 * that it will return. Additionally, this script will connect to the database and user table
 *
 */

<?php
//headers
header("Access-Control-Allow-Origin: *"); //here the asterisk means all (can be read by anyone)
header("Content-Type: application/json; charset=UTF-8"); //will return a json object

//make the database connection
//include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';

//instantiate database and user class
$database = new Database();
$db = $database->getConnection();

$user = new User($db);

//this is how we will read users from the database
$stmt = $user->read(); //read users
$num = $stmt->rowCount(); //get the number of records in the user table

//check if more than 0 reocrds are found
if($num > 0){
	$users_arr = array();
	$users_arr["records"] = array();

	while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		//extract a row
		extract($row);
		$a_user = array(
			"id" => $id,
			"firstname" => $firstname,
			"lastname" => $lastname,
			"email" => $email,
			"age" => $age,
			"access" => $access
		);
		array_push($users_arr["records"], $a_user);
	}
	//set response code - 200 OK
	http_response_code(200);
	//show products data in json format
	echo json_encode($users_arr);
}
else{
	//if no users are found set response code - 404 not found
	http_response_code(404);
	echo json_encode(
		array("message" => "No products found.")
	);
}
?>


