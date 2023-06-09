<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');


include '../conecta.php';

/*QUERY LISTADO GENERAL DE TODOS LOS GRADOS Y TODAS LAS ASIGNATURAS*/
		/*MENÚ MATERIALES AUDIOVISUALES*/

$q = "SELECT DISTINCT cat_grado.id_grado, cat_grado.grado, cat_asignatura.id_asignatura, cat_asignatura.asignatura 
		FROM ((lib_mat_audiovisuales 
		INNER JOIN cat_grado ON cat_grado.id_grado = lib_mat_audiovisuales.id_grado) 
		INNER JOIN cat_asignatura ON cat_asignatura.id_asignatura = lib_mat_audiovisuales.id_asignatura) 
	  WHERE estado =1 ORDER BY `id_grado` ASC, `asignatura` ASC;";
  //WHERE estado =1

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