<?php
$servername = "localhost";
$username = "10057";
$password = "dragon.olmo.silla";
$dbname = "10057";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>