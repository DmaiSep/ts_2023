<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

include '../conecta.php';

$q = "SELECT id_material, lib_visitas.id_tipo_material, cat_material.material, 
      COUNT(id_material) AS masVisto 
	  FROM (lib_visitas INNER JOIN cat_material ON cat_material.id_tipo_material = lib_visitas.id_tipo_material) 
	  GROUP BY id_material ORDER BY masVisto DESC LIMIT 50;";
	  

$conn	=	conecta_bd();
$result = mysqli_query($conn,$q);

if ($result->num_rows) {
	 
	 while($row = $result->fetch_array(MYSQLI_ASSOC)) {
		 
		$myArray[] = $row;
		
		//Se extraen la variale id_material del array
		$id_material = $row["id_material"];	

	    // Condición para el tipo de material ---> (1)Libros , (2)Informático, (3)Audiovisual
		if($row["id_tipo_material"] == 1){
			
			$libro = " SELECT cat_grado.id_grado, cat_grado.grado, cat_asignatura.id_asignatura, cat_asignatura.asignatura, lib_libros.titulo_libro AS titulo,
                              lib_libros.img_libro AS img, lib_libros.ver_libro AS urlMaterial
	                   FROM (
					           (lib_libros INNER JOIN cat_grado ON cat_grado.id_grado = lib_libros.id_grado) 
	                         INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_libros.id_asignatura) 
                       WHERE id_libro = ".$id_material." ";
			
			$result_libro = mysqli_query($conn,$libro);
			
			if ($result_libro->num_rows) {
				while($rowLibro = $result_libro->fetch_array(MYSQLI_ASSOC)){
					array_push($myArray,$rowLibro);
				}
			}else {echo 'No existen datos para ese ID';}
		}
		elseif($row["id_tipo_material"] == 2)
		{
			$informatico = " SELECT cat_grado.id_grado, cat_grado.grado, cat_asignatura.id_asignatura, cat_asignatura.asignatura, cat_bloque.id_bloque,
                                    lib_materiales_informaticos.nom_material AS titulo, lib_materiales_informaticos.img AS img, lib_materiales_informaticos.url AS url
                             FROM (
							        (
									    ( lib_materiales_informaticos INNER JOIN cat_grado ON cat_grado.id_grado = lib_materiales_informaticos.id_grado) 
	                                  INNER JOIN cat_bloque ON cat_bloque.id_bloque = lib_materiales_informaticos.id_bloque) 
	                               INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_materiales_informaticos.id_asignatura)
	                         WHERE id_mat_inform = ".$id_material." ";
							 
			$result_inform = mysqli_query($conn,$informatico);
			
			if ($result_inform->num_rows) {
				while($rowInform = $result_inform->fetch_array(MYSQLI_ASSOC)){
					array_push($myArray,$rowInform);
				}
			}else {echo 'No existen datos para ese ID';}
		}
		elseif($row["id_tipo_material"] == 3)
		{
			$audioVisual = " SELECT  cat_grado.id_grado, cat_grado.grado, cat_asignatura.id_asignatura, cat_asignatura.asignatura, cat_bloque.id_bloque,
                                     nom_video AS titulo, url_video_normal AS url, orden, cat_perfil.id_perfil AS id_tipo
                             FROM (
							        (
									   ( 
									       (lib_mat_audiovisuales INNER JOIN cat_perfil ON cat_perfil.id_perfil = lib_mat_audiovisuales.id_perfil)
                                         INNER JOIN cat_grado ON cat_grado.id_grado = lib_mat_audiovisuales.id_grado) 
                                      INNER JOIN cat_bloque ON cat_bloque.id_bloque = lib_mat_audiovisuales.id_bloque) 
                                  INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_mat_audiovisuales.id_asignatura)
                             WHERE id_mat_audiovisual = ".$id_material." ";
			
			$result_audioVisual = mysqli_query($conn,$audioVisual);
			
			if ($result_audioVisual->num_rows) {
				while($row_aVisual = $result_audioVisual->fetch_array(MYSQLI_ASSOC)){
					array_push($myArray,$row_aVisual);
				}
			}else {echo 'No existen datos para ese ID';}			
		}
		else{
			echo 'El material no existe';
		}
		//var_dump($row);
	  }
	  desconectar_bd($conn);
	  //para mostrar en navegador
	  $arbol_php = json_encode($row);
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