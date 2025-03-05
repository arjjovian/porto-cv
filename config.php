<?php
$host = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "pts_porto";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];


    $sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo "<script>alert('Data berhasil dikirim!');</script>";
    } else {
        echo "<script>alert('Gagal mengirim data!');</script>";
    }
    $stmt->close();
}

$conn->close();
?>