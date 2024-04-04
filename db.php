<?php 

$servername = "localhost";
$username = "admin";
$password = "mibalubi";
$dbname = "english";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if( !$conn){
    die("Connecion Failed".mysqli_connect_error());
}

?>