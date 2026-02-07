<?php
$host = "localhost";
$user = "pguser";
$pass = "Pg@123456";
$db   = "pg_pal";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Database Connection Failed");
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
?>

