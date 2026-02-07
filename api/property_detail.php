<?php
include("../config/db.php");

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM properties WHERE id=$id");
echo json_encode($result->fetch_assoc());
?>
