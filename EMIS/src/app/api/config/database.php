/*this php script shows the database credentials and a method to get a database connection
 * using PDO
 */

<?php
//create the class
class Database{
	//specify the database credentials
	private $host = "localhost";
	private $db_name = "EMIS";
	private $username = "admin";
	private $password = "SuperM@n20";
	public $conn;

//method to get the database connection
//this method returns the database connection object
	public function getConnection(){
		$this->conn = null;

		//try the connection and catch exception if doesn't work
		try{
			//create new database connection object
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			$this->conn->exec("set names utf8");
			echo "connected to database";
		}catch(PDOException $exception){
			echo "Connection error: " . $exception->getMessage();
		}

		return $this->conn;
	}
}
echo "hello";
$database = new Database();
$database->getConnection();
?>
