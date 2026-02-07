<?php
include("../config/db.php");

$result = $conn->query("SELECT * FROM properties ORDER BY id DESC");
$data = [];

while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

echo json_encode($data);
?>
