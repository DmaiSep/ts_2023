<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

//recibe valores externo 
$dat = file_get_contents('php://input');
//echo $data = file_get_contents("php://input");
echo $dat; 
if(!$dat){
  return 'no hay datos';
}

$datos = json_decode($dat, true);

$id_material = $datos['id_material'];;
$tipo_mat = $datos['tipo_mat'];;
$accion = $datos['accion'];;
$zona = $datos['zona'];;
$fecha = date('Y-m-d');

include '../conecta.php';

$q = "INSERT INTO `lib_visitas` (id_visitas, id_material, id_tipo_material, id_accion, fecha, zona) 
      VALUES ('', '$id_material', '$tipo_mat','$accion','$fecha','$zona')"; 


$conn	=	conecta_bd();
$result = mysqli_query($conn,$q);
if ($result->num_rows) {
  while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[] = $row;
  }
  desconectar_bd($conn);
  //para mostrar en navegador
  $arbol_php = json_encode($myArray);
  //para guardar en archivo json
  $jsonencoded = json_encode($myArray,JSON_UNESCAPED_UNICODE);
  $data = str_replace("\\/", "/", $jsonencoded);
  echo $data;
}else{
  echo 'no se encontraron datos';
}


?>