<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

include '../conecta.php';

  $q = "SELECT cat_grado.id_grado, lib_apuntes.tipo_apunte AS id_perfil, lib_apuntes.img_apunte, lib_apuntes.nombre_apunte, lib_apuntes.url_apunte 
  FROM ( lib_apuntes 
  INNER JOIN cat_grado ON cat_grado.id_grado = lib_apuntes.id_grado) 
  WHERE estado = 1 ORDER BY rand();";
  
  $conn	=	conecta_bd();
  $result = mysqli_query($conn,$q);
  
	if ($result->num_rows) 
	{
	  while($row = $result->fetch_array(MYSQLI_ASSOC)) 
	  {
		$myArray[] = $row;
	  }
      desconectar_bd($conn);
	  //para mostrar en navegador
	  $arbol_php = json_encode($myArray);
	  //para guardar en archivo json
	  $jsonencoded = json_encode($myArray,JSON_UNESCAPED_UNICODE);
	  $data = str_replace("\\/", "/", $jsonencoded);
	  echo $data;
    } 
	else 
	{
	  echo 'no se encontraaron registros';
    }

?>