<?php
//Recibo datos del formulario
$dni = $_POST['dni'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$domicilio=$_POST['domicilio'];
$localidad=$_POST['localidad'];
$provincia=$_POST['provincia'];
$codP=$_POST['codP'];
$sexo=$_POST['sexo'];
$estudios=$_POST['estudios'];
$cursos=$_POST['cursos'];


echo "EL DNI INGRESADO ES: $dni <br/>"; 
echo "EL NOMBRE INGRESADO ES: $nombre <br/>";
echo "EL APELLIDO INGRESADO ES: $apellido <br/>";
echo "EL DOMICILIO INGRESADO ES: $domicilio <br/>";
echo "EL LOCALIDAD INGRESADO ES: $localidad <br/>";
echo "EL PROVINCIA INGRESADO ES: $provincia <br/>";
echo "EL CODIGO POSTAL INGRESADO ES: $codP <br/>";
echo "EL SEXO INGRESADO ES: $sexo <br/>";
echo "EL ESTUDIOS INGRESADO ES: $estudios <br/>";
echo "EL CURSOS INGRESADO ES: $cursos <br/>";

?>