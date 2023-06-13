<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

include '../conecta_nf.php';

/*QUERY LISTADO GENERAL ALEATORIO DE MATERIALES AUDIOVISUALES*/

  $q = "SELECT id_cortometraje, titulo, descripcion, autor, anio, duracion, img, url FROM lib_cortometrajes;"; 
  //ORDER BY id_grado, id_bloque, orden ASC;";
  //WHERE lib_mat_audiovisuales.estado =1
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