<?php
include("../config/db.php");

$title = $_POST['title'];
$city  = $_POST['city'];
$rent  = $_POST['rent'];

$sql = "INSERT INTO properties (title, city, rent, type)
        VALUES ('$title','$city','$rent','PG')";

if ($conn->query($sql)) {
  echo json_encode("Property Added Successfully");
} else {
  echo json_encode("Failed to Add Property");
}
?>
