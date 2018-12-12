/*this php script shows a class named User with several of its properties
 * it also has a constructor which will accept a database connection object
 */

//create class User
<?php
class User{

	private $conn; //variable for the database connection
	private $table_name = "USERS"; //from the database

	//table column properties
	public $id;
	public $firstname;
	public $lastname;
	public $email;
	public $age;
	public $access;

	//class contructor that takes a database connection
	public function __construct($db){
		$this->conn = $db;
	}

	//read function to read all user records from the database
	function read(){
		$query = "SELECT * FROM " .$this->table_name; //return all the columns for each user

		//prepare the query
		$stmt = $this->conn->prepare($query);

		//execute
		$stmt->execute();

		return $stmt;
	}
	//create function to create a user record from the database
	function create(){
		$query = "INSERT INTO ".$this->table_name." SET id=:id, firstname=:firstname, lastname=:lastname, email=:email, age=:age, access=:access";
		$stmt = this->conn->prepare($query);

		//sanitize
		this->id=htmlspecialchars(strip_tags($this->id));
		this->firstname=htmlspecialchars(strip_tags($this->firstname));
		this->lastname=htmlspecialchars(strip_tags($this->lastname));
		this->email=htmlspecialchars(strip_tags($this->email));
		this->age=htmlspecialchars(strip_tags($this->age));
		this->access=htmlspecialchars(strip_tags($this->access));
	
		//bind the values
		$stmt->bindParam(":id", $this->id);
		$stmt->bindParam(":firstname", $this->firstname);
		$stmt->bindParam(":lastname", $this->lastname);
		$stmt->bindParam(":email", $this->email);
		$stmt->bindParam(":age", $this->age);
		$stmt->bindParam(":access", $this->access);

		if($stmt->execute()){
			return true;
		}
		return false;
		
	}

	//function to read one user from the database
	function readOne(){
		$query = "SELECT * FROM ".$this->table_name." WHERE ID = id";
		$stmt = $this->conn->prepare($query);
		$stmt->bindParam("id", $this->id);
		$stmt->execute();
		//get retrieved row
		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		//set the values
		$this->id = $row['id'];
		$this->firstname = $row['firstname'];
		$this->lastname = $row['lastname'];
		$this->email = $row['email'];
		$this->age = $row['age'];
		$this->access = $row['access'];
	}

	//function to update a user in the database
	function update(){
		$query = "UPDATE ".$this->table_name." SET firstname=:firstname, lastname=:lastname, email=:email, age=:age, acess=:access WHERE id=:id";
		$stmt = $this->conn->prepare($query);

		this->id=htmlspecialchars(strip_tags($this->id));
		this->firstname=htmlspecialchars(strip_tags($this->firstname));
		this->lastname=htmlspecialchars(strip_tags($this->lastname));
		this->email=htmlspecialchars(strip_tags($this->email));
		this->age=htmlspecialchars(strip_tags($this->age));
		this->access=htmlspecialchars(strip_tags($this->access));

		//bind the values
		$stmt->bindParam(":id", $this->id);
		$stmt->bindParam(":firstname", $this->firstname);
		$stmt->bindParam(":lastname", $this->lastname);
		$stmt->bindParam(":email", $this->email);
		$stmt->bindParam(":age", $this->age);
		$stmt->bindParam(":access", $this->access);

		if($stmt->execute()){
			return true;
		}
		return false;
	}

	//function to delete a user from the database
	function del(){
		$query = "DELETE FROM ".$this->table_name." WHERE ID = id";
		$stmt = $this->conn->prepare($query);
		$this->id=htmlspecialchars(strip_tags($this->id));
		$stmt->bindParam("id", $this->id);

		if($stmt->execute()){
			return true;
		}
		return false;
	}
}
?>
