<?php
session_start();

$_SESSION['c1'] = $_POST['emailUser'];


header("Location: index2.html");
?>