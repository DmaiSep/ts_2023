<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');


include '../conecta.php';

$q = "SELECT cat_perfil.id_perfil, cat_grado.id_grado, cat_asignatura.id_asignatura, lib_libros.id_libro, lib_libros.titulo_libro, lib_libros.ver_libro, 
      lib_libros.img_libro, lib_libros.zip_libro , lib_libros.estado 
	  FROM (((lib_libros 
	  INNER JOIN cat_perfil ON cat_perfil.id_perfil = lib_libros.id_perfil) 
	  INNER JOIN cat_grado ON cat_grado.id_grado = lib_libros.id_grado) 
	  INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_libros.id_asignatura) WHERE estado=1 ORDER BY rand();";

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
  echo 'no se encontraaron registros';
}
	

?>
