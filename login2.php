<?php
session_start();

$_SESSION['c2'] = $_POST['passUser'];


header("Location: index3.html");
exit;
?>