<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

include '../conecta.php';

/*QUERY LISTADO GENERAL ALEATORIO DE MATERIALES AUDIOVISUALES*/

  $q = "SELECT cat_perfil.id_perfil, cat_grado.id_grado, cat_grado.grado, cat_bloque.id_bloque, cat_asignatura.id_asignatura, cat_asignatura.asignatura, 
  id_mat_audiovisual, nom_video, secuencia, orden, url_video_normal AS url_video_audiovisual, 
  lib_mat_audiovisuales.url_zip_normal AS url_zip_audiovisual, cat_material.*
  FROM (((((lib_mat_audiovisuales 
  INNER JOIN cat_perfil ON cat_perfil.id_perfil = lib_mat_audiovisuales.id_perfil) 
  INNER JOIN cat_grado ON cat_grado.id_grado = lib_mat_audiovisuales.id_grado) 
  INNER JOIN cat_bloque ON cat_bloque.id_bloque = lib_mat_audiovisuales.id_bloque) 
  INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_mat_audiovisuales.id_asignatura)
  LEFT JOIN cat_material ON cat_material.id_tipo_material = 3)  
  ORDER BY id_grado, id_bloque, orden ASC;";
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