<?php

/**
* 
*/
class EnviarEmail// extends AnotherClass
{
	
	function __construct()
	{

	}


	function EnviarEmail($data){

	$nombre		= (isset($data['nombre'])) 	? (addslashes($data['nombre'])) : null;
	$email 		= (isset($data['email'])) 	? (addslashes($data['email'])) 	: null;
	$telefono	= (isset($data['telefono'])) 	? (addslashes($data['telefono'])) : null;
	$asunto 	= (isset($data['asunto'])) 	? (addslashes($data['asunto'])) 	: null;
	$mensaje 	= (isset($data['mensaje'])) ? ($data['mensaje'])	: null;	


	$mensaje = '<html>
		<head>
			<title>Email </title>
			<meta charset="utf-8">
		</head>
		<body><h2>Mensaje</h2>
		<table border="1">
			<tr>
				<th>Nombre</th>
				<th>Email</th>
				<th>Teléfono</th>
				<th>Asunto</th>
				<th>Mensaje</th>
			</tr>
			<tr>
				<td>'.$nombre.'</td>
				<td>'.$email.'</td>
				<td>'.$telefono.'</td>
				<td>'.$asunto.'</td>
				<td>'.$mensaje.'</td>
			</tr>
		</table>
		<hr>
		Enviado desde www.lal.com.pe
		</body>
		</html>';

		$this-> EnviarMail($mensaje);

	}


	function EnviarMail($mensaje){

		$to= "formulario@lal.com.pe";
		$subject = "Estudio Laos, Aguilar, Limas & Asociados - CONTACTO";
			//$txt = "Hello world!";

		$cabeceras = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$cabeceras .= 'Estudio Laos, Aguilar, Limas & Asociados <formulario@lal.com.pe>';		

		if(@mail($to,$subject,$mensaje,$cabeceras)){
			echo ("<p>Tu mensaje ha sido enviado correctamente</p>");
		}
		else{
			echo ("<p>No se enviaron tus datos, hubo un problema, vuelve a intentarlo</p>");
		}

	}
}


?>