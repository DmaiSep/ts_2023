<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

include '../conecta.php';

  $q = "(
	(SELECT  lib_libros.id_asignatura,lib_libros.id_grado , lib_libros.id_perfil, null AS orden, cat_grado.grado, cat_asignatura.asignatura, null AS id_bloque, null AS secuencia, cat_material.material AS tipo_material,   cat_material.id_tipo_material, lib_libros.titulo_libro AS titulo ,lib_libros.img_libro AS img, lib_libros.ver_libro as url, lib_libros.zip_libro AS exe, null AS orden
		FROM ( 
						( lib_libros LEFT JOIN cat_grado ON cat_grado.id_grado = lib_libros.id_grado) 
						LEFT JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_libros.id_asignatura
						LEFT JOIN cat_material ON cat_material.id_tipo_material = 1
					) 
					WHERE estado=1 ORDER BY rand() LIMIT 30
	)
)


UNION

(
	SELECT   lib_materiales_informaticos.id_asignatura, lib_materiales_informaticos.id_grado, lib_materiales_informaticos.id_perfil, null AS orden, cat_grado.grado,  cat_asignatura.asignatura, cat_bloque.id_bloque AS id_bloque,  null AS secuencia, cat_material.material AS tipo_material,   cat_material.id_tipo_material, lib_materiales_informaticos.nom_material AS titulo, lib_materiales_informaticos.img AS img , lib_materiales_informaticos.url AS url, lib_materiales_informaticos.exe AS exe, null AS orden
		FROM  (  
						(  
							( lib_materiales_informaticos LEFT JOIN cat_grado ON cat_grado.id_grado = lib_materiales_informaticos.id_grado) 
							LEFT JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_materiales_informaticos.id_asignatura
						)
						LEFT JOIN cat_bloque ON cat_bloque.id_bloque = lib_materiales_informaticos.id_bloque
						LEFT JOIN cat_material ON cat_material.id_tipo_material = 2
					) 
					WHERE estado = 1 ORDER BY rand() LIMIT 30
)

UNION 

(
	SELECT  lib_mat_audiovisuales.id_asignatura ,lib_mat_audiovisuales.id_grado, lib_mat_audiovisuales.id_perfil, lib_mat_audiovisuales.orden, cat_grado.grado, cat_asignatura.asignatura,  cat_bloque.id_bloque  AS id_bloque,  secuencia AS secuencia, cat_material.material AS tipo_material,   cat_material.id_tipo_material, lib_mat_audiovisuales.nom_video AS titulo , null AS img, lib_mat_audiovisuales.url_video_normal AS url, 
	lib_mat_audiovisuales.url_zip_normal AS exe, lib_mat_audiovisuales.orden AS orden
	FROM (
					(	  
						(lib_mat_audiovisuales INNER JOIN cat_grado ON cat_grado.id_grado = lib_mat_audiovisuales.id_grado) 
						INNER JOIN cat_bloque ON cat_bloque.id_bloque = lib_mat_audiovisuales.id_bloque
					) 
					INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_mat_audiovisuales.id_asignatura
					LEFT JOIN cat_material ON cat_material.id_tipo_material = 3
				) 
				WHERE estado = 1 ORDER BY rand() LIMIT 30
)
ORDER BY rand()
LIMIT 30;
";
 
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