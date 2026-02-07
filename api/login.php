<?php
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];

$result = $conn->query("SELECT * FROM users WHERE email='$email'");

if ($result->num_rows == 0) {
  echo json_encode("User not found");
  exit;
}

$user = $result->fetch_assoc();

if (password_verify($password, $user['password'])) {
  echo json_encode([
    "status" => "success",
    "user" => [
      "id" => $user['id'],
      "name" => $user['name']
    ]
  ]);
} else {
  echo json_encode("Invalid password");
}
?>
