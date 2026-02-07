<?php
include("../config/db.php");

$name = $_POST['name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

$check = $conn->query("SELECT id FROM users WHERE email='$email'");
if ($check->num_rows > 0) {
  echo json_encode("Email already exists");
  exit;
}

$sql = "INSERT INTO users (name, email, password)
        VALUES ('$name','$email','$password')";

if ($conn->query($sql)) {
  echo json_encode("Registered Successfully");
} else {
  echo json_encode("Registration Failed");
}
?>
