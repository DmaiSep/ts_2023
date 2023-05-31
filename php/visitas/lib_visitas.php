<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

//recibe valores externo 
$dat = file_get_contents('php://input');
//echo $data = file_get_contents("php://input");
$datos = json_decode($dat, true);

if($datos){

  $id_material = $datos['id_material'];;
  $tipo_mat = $datos['id_tipo_material'];;
  $accion = $datos['id_accion'];;
  $zona = $datos['zona'];;
  $fecha = date('Y-m-d');
  
  include '../conecta.php';
  
  $q = "INSERT INTO `lib_visitas` ( id_material, id_tipo_material, id_accion, fecha, zona) 
        VALUES ( '$id_material', '$tipo_mat','$accion','$fecha','$zona')"; 
  
  
  $conn	=	conecta_bd();
  if (mysqli_query($conn,$q) ) {
      $myArray [] = array( "message" => "Gracias por interactuar con el Material Educativo de TELEsecundaria");
      $jsonencoded = json_encode( $myArray ,JSON_UNESCAPED_UNICODE);
      $data = str_replace("\\/", "/", $jsonencoded);
      echo $data;
  }

  desconectar_bd($conn);

}else{
  echo 'Que ta haciendo eee';
}



?>