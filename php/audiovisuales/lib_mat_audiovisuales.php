<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

include '../conecta.php';

/*QUERY LISTADO GENERAL ALEATORIO DE MATERIALES AUDIOVISUALES*/

  $q = "SELECT cat_perfil.id_perfil, cat_grado.id_grado, cat_grado.grado, cat_bloque.id_bloque, cat_asignatura.id_asignatura, cat_asignatura.asignatura, lib_mat_audiovisuales.id_mat_audiovisual, lib_mat_audiovisuales.nom_video, secuencia 
		FROM ((((lib_mat_audiovisuales 
		INNER JOIN cat_perfil ON cat_perfil.id_perfil = lib_mat_audiovisuales.id_perfil) 
		INNER JOIN cat_grado ON cat_grado.id_grado = lib_mat_audiovisuales.id_grado) 
		INNER JOIN cat_bloque ON cat_bloque.id_bloque = lib_mat_audiovisuales.id_bloque) 
		INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_mat_audiovisuales.id_asignatura) 
		ORDER BY rand();";

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