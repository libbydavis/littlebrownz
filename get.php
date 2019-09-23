<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$file = fopen('data.txt', 'w+');
	ftruncate($file, 0);
	$content = $name. PHP_EOL .$email. PHP_EOL. $message;
	fwrite($file, $content);
	fclose($file );
	die(header("Location: ".$_SERVER["HTTP_REFERER"]));
?>