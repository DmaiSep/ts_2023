-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2023 a las 00:51:09
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ts_2023`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lib_apuntes`
--

CREATE TABLE `lib_apuntes` (
  `id_apunte` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `tipo_apunte` int(11) NOT NULL,
  `img_apunte` varchar(700) NOT NULL,
  `url_apunte` varchar(850) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lib_apuntes`
--

INSERT INTO `lib_apuntes` (`id_apunte`, `id_grado`, `id_asignatura`, `tipo_apunte`, `img_apunte`, `url_apunte`, `estado`) VALUES
(1, 1, 10, 1, '../Repositorio/apuntes/imagenes/1/Artes_visuales-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-ART-VIS-1.pdf', 0),
(2, 1, 11, 1, '../Repositorio/apuntes/imagenes/1/Danza-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-DANZA-1.pdf', 0),
(3, 1, 12, 1, '../Repositorio/apuntes/imagenes/1/Musica-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-MUSICA-1.pdf', 0),
(4, 1, 13, 1, '../Repositorio/apuntes/imagenes/1/Teatro-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-TEATRO-1.pdf', 0),
(5, 1, 9, 1, '../Repositorio/apuntes/imagenes/1/Ingles-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-INGLES-1.pdf', 0),
(6, 1, 21, 1, '../Repositorio/apuntes/imagenes/1/Tecnologia-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-TECNO-1-B1-5-P-001-352.pdf', 0),
(7, 1, 15, 1, '../Repositorio/apuntes/imagenes/1/Educacion_Fisica-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-EDU-FIS-1.pdf', 0),
(8, 1, 20, 1, '../Repositorio/apuntes/imagenes/1/Orientacion_y_Tutoria-1ro.png', '../Repositorio/apuntes/pdf/1/TS-APUN-OYT-1.pdf', 0),
(9, 1, 27, 2, '../Repositorio/apuntes/imagenes/1/Agricultura_primero.png', '../Repositorio/apuntes/pdf/1/TS-APUN-TEC-1-AGRI.pdf', 0),
(10, 1, 28, 2, '../Repositorio/apuntes/imagenes/1/tecnologia_administrativa_primero.png', '../Repositorio/apuntes/pdf/1/TS-APUN-TEC-1-ADM.pdf', 0),
(11, 1, 29, 2, '../Repositorio/apuntes/imagenes/1/cria_y_manejo_de_pequeñas_especies_primero.png', '../Repositorio/apuntes/pdf/1/TS-APUN-TEC-1-CRIA.pdf', 0),
(12, 1, 30, 2, '../Repositorio/apuntes/imagenes/1/conservacion_alimentos_primero.png', '../Repositorio/apuntes/pdf/1/TS-APUN-TEC-1-CONSERVA.pdf', 0),
(13, 2, 10, 1, '../Repositorio/apuntes/imagenes/2/Artes_Visuales_2/Artes_visuales-2do.png', '../Repositorio/apuntes/pdf/2/Artes_Visuales_2/TS-APUN-ART-VIS-2.pdf', 1),
(14, 2, 11, 1, '../Repositorio/apuntes/imagenes/2/Danza_2/Danza-2do.png', '../Repositorio/apuntes/pdf/2/Danza_2/TS-APUN-DANZA-2.pdf', 1),
(15, 2, 15, 1, '../Repositorio/apuntes/imagenes/2/Educ_Fis_2/Educacion_Fisica-2do.png', '../Repositorio/apuntes/pdf/2/Educ_Fis_2/TS-APUN-EDUC-FIS-2.pdf', 1),
(16, 2, 9, 1, '../Repositorio/apuntes/imagenes/2/Ingles_2/Ingles-01.png', '../Repositorio/apuntes/pdf/2/Ingles_2/TS-APUN-INGLES-2.pdf', 1),
(17, 2, 12, 1, '../Repositorio/apuntes/imagenes/2/Musica_2/Musica-2do.png', '../Repositorio/apuntes/pdf/2/Musica_2/TS-APUN-MUSICA-2.pdf', 1),
(18, 2, 20, 1, '../Repositorio/apuntes/imagenes/2/Orienta_Tuto_2/Orientacion_y_Tutoria-2do.png', '../Repositorio/apuntes/pdf/2/Orienta_Tuto_2/TS-APUN-ORIENTAYTUTO.pdf', 1),
(19, 2, 13, 1, '../Repositorio/apuntes/imagenes/2/Teatro_2/Teatro-2do.png', '../Repositorio/apuntes/pdf/2/Teatro_2/TS-APUN-TEATRO-2.pdf', 1),
(20, 2, 21, 1, '../Repositorio/apuntes/imagenes/2/Tecnologia_2/Tecnologia-2do.png', '../Repositorio/apuntes/pdf/2/Tecnologia_2/TS-APUN-TECN-2.pdf', 1),
(21, 2, 19, 2, '../Repositorio/apuntes/imagenes/2/Tec_Administrativa_2/tecnologia_administrativa_segundo.png', '../Repositorio/apuntes/pdf/2/Administracion_2/TS-APUN-TEC-2-ADM.pdf', 1),
(22, 2, 18, 2, '../Repositorio/apuntes/imagenes/2/Agricultura_2/agricultura_segundo.png', '../Repositorio/apuntes/pdf/2/Agricultura_2/TS-APUN-TEC-2-AGRI.pdf', 1),
(23, 2, 17, 2, '../Repositorio/apuntes/imagenes/2/Conservacion_2/conservacion_alimentos_segundo.png', '../Repositorio/apuntes/pdf/2/Conservacion_2/TS-APUN-TEC-2-CONSERVA.pdf', 1),
(24, 2, 16, 2, '../Repositorio/apuntes/imagenes/2/Cria_2/cria_y_manejo_de_pequenas_especies_segundo.png', '../Repositorio/apuntes/pdf/2/Cria_2/TS-APUN-TEC-2-CRIA.pdf', 1),
(25, 2, 14, 2, '../Repositorio/apuntes/imagenes/2/Infraestructura_2/infraestructura_segundo.png', '../Repositorio/apuntes/pdf/2/Infraestructura_2/TS-APUN-TEC-2-INFRA.pdf', 1),
(26, 3, 10, 1, '../Repositorio/apuntes/imagenes/3/Artes_Visuales_3/Artes_visuales-3ro.png', '../Repositorio/apuntes/pdf/3/Artes_Visuales_3/TS-APUN-ART-VIS-3.pdf', 1),
(27, 3, 11, 1, '../Repositorio/apuntes/imagenes/3/Danza_3/Danza-3ro.png', '../Repositorio/apuntes/pdf/3/Danza_3/TS-APUN-DANZA-3.pdf', 1),
(28, 3, 15, 1, '../Repositorio/apuntes/imagenes/3/Educ_Fis_3/Educacion_Fisica-3ro.png', '../Repositorio/apuntes/pdf/3/Educ_Fis_3/TS-APUN-EDUC-FIS-3.pdf', 1),
(29, 3, 9, 1, '../Repositorio/apuntes/imagenes/3/Ingles_3/Ingles-3ro.png', '../Repositorio/apuntes/pdf/3/Ingles_3/TS-APUN-INGLES-3.pdf', 1),
(30, 3, 12, 1, '../Repositorio/apuntes/imagenes/3/Musica_3/Musica-3ro.png', '../Repositorio/apuntes/pdf/3/Musica_3/TS-APUN-MUS-3.pdf', 1),
(31, 3, 20, 1, '../Repositorio/apuntes/imagenes/3/Orienta_Tuto_3/Orientacion_y_Tutoria-3ro.png', '../Repositorio/apuntes/pdf/3/Orienta_Tuto_3/TS-APUN-OYT-3.pdf', 1),
(32, 3, 13, 1, '../Repositorio/apuntes/imagenes/3/Teatro_3/Teatro-3ro.png', '../Repositorio/apuntes/pdf/3/Teatro_3/TS-APUN-TEATRO-3.pdf', 1),
(33, 3, 21, 1, '../Repositorio/apuntes/imagenes/3/Tecnologia_3/Tecnologia-3ro.png', '../Repositorio/apuntes/pdf/3/Tecnologia_3/TS-APUN-TECNO-3.pdf', 1),
(34, 3, 22, 2, '../Repositorio/apuntes/imagenes/3/Tec_Administrativa_3/tecnologia_administrativa_tercero.png', '../Repositorio/apuntes/pdf/3/Administracion_3/TS-APUN-TEC-3-ADM.pdf', 1),
(35, 3, 23, 2, '../Repositorio/apuntes/imagenes/3/Agricultura_3/agricultura_tercero.png', '../Repositorio/apuntes/pdf/3/Agricultura_3/TS-APUN-TEC-3-AGRI.pdf', 1),
(36, 3, 24, 2, '../Repositorio/apuntes/imagenes/3/Conservacion_3/conservacion_alimentos_tercero.png', '../Repositorio/apuntes/pdf/3/Conservacion_3/TS-APUN-TEC-3-CONSERVA.pdf', 1),
(37, 3, 25, 2, '../Repositorio/apuntes/imagenes/3/Cria_3/cria_y_manejo_de_pequeñas_especies_tercero.png', '../Repositorio/apuntes/pdf/3/Cria_3/TS-APUN-TEC-3-CRIA.pdf', 1),
(38, 3, 26, 2, '../Repositorio/apuntes/imagenes/3/Infraestructura_3/infraestructura_tercero.png', '../Repositorio/apuntes/pdf/3/Infraestructura_3/TS-APUN-TEC-3-INFRA.pdf', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lib_apuntes`
--
ALTER TABLE `lib_apuntes`
  ADD PRIMARY KEY (`id_apunte`,`id_grado`,`id_asignatura`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lib_apuntes`
--
ALTER TABLE `lib_apuntes`
  MODIFY `id_apunte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
