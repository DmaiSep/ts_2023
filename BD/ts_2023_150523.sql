-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-05-2023 a las 21:47:49
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
-- Estructura de tabla para la tabla `cat_asignatura`
--

CREATE TABLE `cat_asignatura` (
  `id_asignatura` int(11) NOT NULL,
  `asignatura` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_asignatura`
--

INSERT INTO `cat_asignatura` (`id_asignatura`, `asignatura`) VALUES
(10, 'Artes Visuales'),
(2, 'Ciencias y Tecnología. Biología'),
(3, 'Ciencias y Tecnología. Física'),
(4, 'Ciencias y Tecnología. Química'),
(11, 'Danza'),
(5, 'Formación Cívica y Ética'),
(6, 'Geografía'),
(7, 'Historia'),
(9, 'Lengua Extranjera. Inglés'),
(1, 'Lengua Materna. Español'),
(8, 'Matemáticas'),
(12, 'Música'),
(13, 'Teatro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_bloque`
--

CREATE TABLE `cat_bloque` (
  `id_bloque` int(11) NOT NULL,
  `bloque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_bloque`
--

INSERT INTO `cat_bloque` (`id_bloque`, `bloque`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_grado`
--

CREATE TABLE `cat_grado` (
  `id_grado` int(11) NOT NULL,
  `grado` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_grado`
--

INSERT INTO `cat_grado` (`id_grado`, `grado`) VALUES
(1, 'Primer grado'),
(2, 'Segundo grado'),
(3, 'Tercer grado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_libros`
--

CREATE TABLE `cat_libros` (
  `id_libro` int(11) NOT NULL,
  `id_perfil` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `titulo_libro` varchar(250) NOT NULL,
  `ver_libro` longtext NOT NULL,
  `img_libro` longtext NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_libros`
--

INSERT INTO `cat_libros` (`id_libro`, `id_perfil`, `id_grado`, `id_asignatura`, `titulo_libro`, `ver_libro`, `img_libro`, `estado`) VALUES
(1, 1, 1, 1, 'Lengua Materna. Español', '../Repositorio/Maestro/Libros/1/Espanol/TS-LPM-LMESP-1-BAJA.pdf', '../Repositorio/Maestro/Imagenes/1/Espanol/espanol-1-m.png', 1),
(2, 1, 1, 2, 'Ciencias y Tecnología. Biología', '../Repositorio/Maestro/Libros/1/Ciencias/TS-LPM-CIENCIAS-BIO-BAJA.pdf', '../Repositorio/Maestro/Imagenes/1/Ciencias/ciencias-1-m.png', 1),
(3, 1, 1, 5, 'Formación Cívica y Ética', '../Repositorio/Maestro/Libros/1/FCYE/TS-LPM-FCYE-1-BAJA.pdf', '../Repositorio/Maestro/Imagenes/1/FCYE/fcye-1-m.png', 1),
(4, 1, 1, 6, 'Geografía', '../Repositorio/Maestro/Libros/1/Geografia/TS-LPM-GEOGRAFIA-1-BAJA.pdf', '../Repositorio/Maestro/Imagenes/1/Geografia/geografia-1-m.png', 1),
(5, 1, 1, 7, 'Historia', '../Repositorio/Maestro/Libros/1/Historia/TS-LPM-HIST-1-BAJA.pdf', '../Repositorio/Maestro/Imagenes/1/Historia/historia-1-m.png', 1),
(6, 1, 1, 8, 'Matemáticas', '../Repositorio/Maestro/Libros/1/Matematicas/TS-LPM-MATE-1-BAJA.pdf', '../Repositorio/Maestro/Imagenes/1/Matematicas/matematicas-1-m.png', 1),
(7, 1, 2, 1, 'Lengua Materna. Español', '../Repositorio/Maestro/Libros/2/Espanol/TS-LPM-LMESP-2-BAJA.pdf', '../Repositorio/Maestro/Imagenes/2/Espanol/TS_LPM_ESP_2do_2.png', 1),
(8, 1, 2, 8, 'Matemáticas', '../Repositorio/Maestro/Libros/2/Matematicas/TS-LPM-MATE-2-BAJA.pdf', '../Repositorio/Maestro/Imagenes/2/Matematicas/TS-LPM-Mate-2-B.png', 1),
(9, 1, 2, 5, 'Formación Cívica y Ética', '../Repositorio/Maestro/Libros/2/FCyE/TS-LPM-FCYE-2-BAJA.pdf', '../Repositorio/Maestro/Imagenes/2/FCyE/TS-LPM-FCYE_2_B.png', 1),
(10, 1, 2, 3, 'Ciencias y Tecnología. Física', '../Repositorio/Maestro/Libros/2/Ciencias/TS-LPM-CIENCIAS-FIS-2-BAJA.pdf', '../Repositorio/Maestro/Imagenes/2/Ciencias/TS-LM-FIS-2-B.png', 1),
(11, 1, 2, 7, 'Historia', '../Repositorio/Maestro/Libros/2/Historia/TS-LPM-HISTORIA-2-BAJA.pdf', '../Repositorio/Maestro/Imagenes/2/Historia/TS-LPM-HIS-2_B.png', 1),
(12, 1, 3, 1, 'Lengua Materna. Español', '../Repositorio/Maestro/Libros/3/Espanol/TS-LPM-LMESP-3-baja.pdf', '../Repositorio/Maestro/Imagenes/3/Espanol/TS-LPM-LMESP-3.png', 0),
(13, 1, 3, 4, 'Ciencias y Tecnología. Química', '../Repositorio/Maestro/Libros/3/Ciencias/TS-LPM-CIENCIA-QUIM-3-baja.pdf', '../Repositorio/Maestro/Imagenes/3/Ciencias/TS-LPM-CIENCIAS-QUIM-3.png', 0),
(14, 1, 3, 8, 'Matemáticas', '../Repositorio/Maestro/Libros/3/Matematicas/TS-LPM-MATE-3-BAJA.pdf', '../Repositorio/Maestro/Imagenes/3/Matematicas/TS-LPM-MATE-3.png', 0),
(15, 1, 3, 7, 'Historia', '../Repositorio/Maestro/Libros/3/Historia/TS-LPM-HISTORIA-3-BAJA.pdf', '../Repositorio/Maestro/Imagenes/3/Historia/TS-LPM-HISTORIA-3.png', 0),
(16, 1, 3, 5, 'Formación Cívica y Ética', '../Repositorio/Maestro/Libros/3/FCyE/TS-LPM-FCYE-3-BAJA.pdf', '../Repositorio/Maestro/Imagenes/3/FCyE/TS-LPM-FCYE-3.png', 0),
(17, 2, 1, 1, 'Lengua Materna. Español', '../Repositorio/Alumno/Libros/1/Espanol/TS-LPA-LMESP-1-BAJA.pdf', '../Repositorio/Alumno/Imagenes/1/Espanol/espanol-1-a.png', 1),
(18, 2, 1, 2, 'Ciencias y Tecnología. Biología', '../Repositorio/Alumno/Libros/1/Ciencias/TS-LPA-CIENCIA-BIO-1-BAJA.pdf', '../Repositorio/Alumno/Imagenes/1/Ciencias/ciencias-1-a.png', 1),
(19, 2, 1, 5, 'Formación Cívica y Ética', '../Repositorio/Alumno/Libros/1/FCYE/TS-LPA-FCYE-1-BAJA.pdf', '../Repositorio/Alumno/Imagenes/1/FCyE/fcye-1-a.png', 1),
(20, 2, 1, 6, 'Geografía', '../Repositorio/Maestro/Libros/1/Geografia/TS-LPM-GEOGRAFIA-1-BAJA.pdf', '../Repositorio/Alumno/Imagenes/1/Geografia/geografia-1-a.png', 1),
(21, 2, 1, 7, 'Historia', '../Repositorio/Alumno/Libros/1/Historia/TS-LPA-HIST-1-BAJA.pdf', '../Repositorio/Alumno/Imagenes/1/Historia/historia-1-a.png', 1),
(22, 2, 1, 8, 'Matemáticas', '../Repositorio/Alumno/Libros/1/Matematicas/TS-LPA-MATE-1-BAJA.pdf', '../Repositorio/Alumno/Imagenes/1/Matematicas/matematicas-1-a.png', 1),
(23, 2, 1, 9, '@ccess 1 secundaria', 'http://edebe.com.mx/ebook/@cceses/1/@ccess1_Students%20Book_Interiores/mobile/index.html', '../Repositorio/Alumno/Imagenes/1/ingles/cces1ecundaria_2.png', 0),
(24, 2, 1, 9, 'Come Together Reader?s Book 1', 'https://secundaria.macmillan.mx/data/resources/ct1/ct1_sb/index.html#page/1', '../Repositorio/Alumno/Imagenes/1/ingles/ReaderBook1.png', 0),
(25, 2, 1, 9, 'Breathe English 1 student?s book', 'http://appstrillas.mx/pdfFlipping/viewer.jsp?id=BE1S', '../Repositorio/Alumno/Imagenes/1/ingles/BreatEnglishstudentbook.png', 0),
(26, 2, 1, 9, 'Quest 1 Reader?s Book', 'https://guiasdigitales.grupo-sm.com.mx/sites/default/files/guias/163411/index.html', '../Repositorio/Alumno/Imagenes/1/ingles/QuestReaderBook.png', 0),
(27, 2, 1, 9, 'Ready for Success Reader?s Book 1', 'https://secundaria.macmillan.mx/data/resources/rfs1/rfs1_sb/index.html#page/1', '../Repositorio/Alumno/Imagenes/1/ingles/Readyss.png', 0),
(28, 2, 1, 9, 'Got it! 1 Reader?s Book', 'https://digital.latiendadellibrero.com/pdfreader/got-1-teachers-book', '../Repositorio/Alumno/Imagenes/1/ingles/GotReaderBook.png', 0),
(29, 2, 1, 9, 'English Links 1', 'http://appstrillas.mx/pdfFlipping/viewer.jsp?id=ELS1', '../Repositorio/Alumno/Imagenes/1/ingles/Englis1_2.png', 0),
(30, 2, 1, 9, 'Crossover 1 Reader?s Book Activity book', 'https://guiasdigitales.grupo-sm.com.mx/sites/default/files/guias/183654/index.html', '../Repositorio/Alumno/Imagenes/1/ingles/CrossovReaderBookActivitybook.png', 0),
(31, 2, 1, 9, 'All on Board! 1 Reader?s Book', 'https://digital.latiendadellibrero.com/pdfreader/all-on-board-1-students-book', '../Repositorio/Alumno/Imagenes/1/ingles/AllReaderBookstudentbook.png', 0),
(32, 2, 1, 9, 'FLYING COLORS 1 Secondary Reader?s Book_student?s book', 'https://www.santillanacontigo.com.mx/libromedia/FlyingColors1/FC_SB1/DB_SB/', '../Repositorio/Alumno/Imagenes/1/ingles/FLYINGCOLOSecondarBook_student.png', 0),
(33, 2, 1, 9, 'English Connect Reader?s Book 1', 'https://secundaria.macmillan.mx/data/resources/ec1/ec1_sb/index.html#page/1', '../Repositorio/Alumno/Imagenes/1/ingles/EnglisConnecReaderBoo1_2.png', 0),
(34, 2, 1, 9, 'Beats! 1 Secondary Reader?s Book', 'https://libros.conaliteg.gob.mx/2021/secundaria/SZ0028.htm', '../Repositorio/Alumno/Imagenes/1/ingles/BeatSecondaryReaderBook_2.png', 0),
(35, 2, 1, 9, 'GET AHEAD! 1 Reader?s Book', 'https://libros.conaliteg.gob.mx/2021/secundaria/SZ0020.htm', '../Repositorio/Alumno/Imagenes/1/ingles/GEAHEADReaderBook_3.png', 0),
(36, 2, 1, 9, 'Yes, we can! 1 Secondary Reader?s Book', 'https://www.santillanacontigo.com.mx/libromedia/YesWeCan1/YW_SB1/DB_SB/', '../Repositorio/Alumno/Imagenes/1/ingles/Yes.png', 0),
(37, 2, 2, 9, 'Beats! 2 Secondary', 'https://libros.conaliteg.gob.mx/2021/secundaria/SZ0003.htm', '../Repositorio/Alumno/Imagenes/2/ingles/8.png', 0),
(38, 2, 2, 9, 'Get ahead! 2', 'https://libros.conaliteg.gob.mx/2021/secundaria/SZ0005.htm', '../Repositorio/Alumno/Imagenes/2/ingles/9.png', 0),
(39, 2, 2, 9, 'Quest 2', 'http://guiasdigitales.grupo-sm.com.mx/sites/default/files/guias/163414/index.html', '../Repositorio/Alumno/Imagenes/2/ingles/7.png', 0),
(40, 2, 2, 9, 'Crossover 2', 'http://guiasdigitales.grupo-sm.com.mx/sites/default/files/guias/183655/index.html', '../Repositorio/Alumno/Imagenes/2/ingles/6.png', 0),
(41, 2, 2, 9, 'Come Together 2', 'http://edutics.mx/CT2SB', '../Repositorio/Alumno/Imagenes/2/ingles/4.png', 0),
(42, 2, 2, 9, 'Move on 2', 'http://www.edutics.mx/596', '../Repositorio/Alumno/Imagenes/2/ingles/5.png', 0),
(43, 2, 2, 9, 'Yes, we can! 2 Secondary Student´s Book', 'https://www.santillanacontigo.com.mx/libromedia/YesWeCan2/YW_SB2/DB_SB/', '../Repositorio/Alumno/Imagenes/2/ingles/3.png', 0),
(44, 2, 2, 9, 'Access 2 Secundaria Reader´s Book', 'https://edebe.com.mx/ebook/@cceses/2/@ccess2_Readers%20Book_Interiores/mobile/index.html', '../Repositorio/Alumno/Imagenes/2/ingles/2.png', 0),
(45, 2, 2, 9, 'Backpackers 2', 'https://recursos.edicionescastillo.com/secundariaspublicas/visualizador/2_eng_bac/index.html#page/1', '../Repositorio/Alumno/Imagenes/2/ingles/1.png', 0),
(46, 2, 2, 3, 'Ciencias y Tecnología. Física', '../Repositorio/Alumno/Libros/2/Ciencias/TS-LPA-CIENCIA-FIS-2-BAJA.pdf', '../Repositorio/Alumno/Imagenes/2/Ciencias/TS-LPA-CIENCIA-FIS-2-V1-BAJA1.png', 1),
(47, 2, 2, 1, 'Lengua Materna. Español', '../Repositorio/Alumno/Libros/2/Espanol/TS-LPA-LMESP-2-BAJA.pdf', '../Repositorio/Alumno/Imagenes/2/Espanol/TS-LPA-LMESP-2-VI-BAJA1.png', 1),
(48, 2, 2, 8, 'Matemáticas', '../Repositorio/Alumno/Libros/2/Matematicas/TS-LPA-MATE-2-BAJA.pdf', '../Repositorio/Alumno/Imagenes/2/Matematicas/TS-LPA-MATE-2-V1-BAJA1.png', 1),
(49, 2, 2, 7, 'Historia', '../Repositorio/Alumno/Libros/2/Historia/TS-LPA-HISTORIA-2-BAJA.pdf', '../Repositorio/Alumno/Imagenes/2/Historia/TS-LPA-HIST-2-BAJA1.png', 1),
(50, 2, 2, 5, 'Formación Cívica y Ética', '../Repositorio/Alumno/Libros/2/FCyE/TS-LPA-FCYE-2-BAJA.pdf', '../Repositorio/Alumno/Imagenes/2/FCyE/TS-LPA-FCYE-2-V1-BAJA1.png', 1),
(51, 2, 3, 4, 'Laboratorio de ciencias experimentales III Química', '../Repositorio/Alumno/Libros/3/Ciencias/LAB_CEIII_QUIM_3GR.pdf', '../Repositorio/Alumno/Imagenes/3/Ciencias/LAB_CEIII_QUIM_3GR.png', 0),
(52, 2, 3, 9, 'Get ahead! 3', 'https://libros.conaliteg.gob.mx/2021/secundaria/SZ0043.htm', '../Repositorio/Alumno/Imagenes/3/Ingles/6.png', 0),
(53, 2, 3, 9, 'Beats! 3 Secondary Student´s Book', 'https://libros.conaliteg.gob.mx/20/SZ0096.htm#page/1', '../Repositorio/Alumno/Imagenes/3/Ingles/5.png', 0),
(54, 2, 3, 9, 'Play & Play Connections Secondary 3Student´s Book', 'https://packgoogle-pro.s3.amazonaws.com/libromedia-norma/play_and_play_3_sb/mobile.html', '../Repositorio/Alumno/Imagenes/3/Ingles/4.png', 0),
(55, 2, 3, 9, 'Access 3 Student´s Book', 'https://edebe.com.mx/ebook/@cceses/3/@ccess3_Students%20Book/mobile/index.html', '../Repositorio/Alumno/Imagenes/3/Ingles/3.png', 0),
(56, 2, 3, 9, 'English Connect. Student´s Book 3', 'http://edutics.mx/EC3SB', '../Repositorio/Alumno/Imagenes/3/Ingles/2.png', 0),
(57, 2, 3, 9, 'Come Together. Student´s Book 3', 'http://edutics.mx/CT3SB', '../Repositorio/Alumno/Imagenes/3/Ingles/1.png', 0),
(58, 2, 3, 4, 'Ciencias y Tecnología. Química', '../Repositorio/Alumno/Libros/3/Ciencias/TS-LPA-CIENCIAS-QUIM-3-BAJA.pdf', '../Repositorio/Alumno/Imagenes/3/Ciencias/3_3_v21.png', 0),
(59, 2, 3, 1, 'Lengua Materna. Español', '../Repositorio/Alumno/Libros/3/Espanol/TS-LPA-LMESP-3-BAJA.pdf', '../Repositorio/Alumno/Imagenes/3/Espanol/3_11.png', 0),
(60, 2, 3, 8, 'Matemáticas', '../Repositorio/Alumno/Libros/3/Matematicas/TS-LPA-MATE-3-BAJA.pdf', '../Repositorio/Alumno/Imagenes/3/Matematicas/3_21.png', 0),
(61, 2, 3, 5, 'Formación Cívica y Ética', '../Repositorio/Alumno/Libros/3/FCyE/TS-LPA-FCYE-3-BAJA.pdf', '../Repositorio/Alumno/Imagenes/3/FCyE/3_61.png', 0),
(62, 2, 3, 7, 'Historia', '../Repositorio/Alumno/Libros/3/Historia/TS-LPA-HISTORIA-3-BAJA.pdf', '../Repositorio/Alumno/Imagenes/3/Historia/3_51.png', 0),
(63, 2, 3, 9, 'Inglés III Apuntes', '../Repositorio/Alumno/Libros/3/Ingles/TS-APUN-INGLES-3-BAJA_1/', '../Repositorio/Alumno/Imagenes/3/Ingles/TS-APUN-INGLES-3-BAJA.png', 0),
(65, 1, 3, 4, 'Laboratorio de ciencias experimentales III Química', '../Repositorio/Maestro/Libros/3/Ciencias/LAB_CEIII_QUIM_3GR.pdf', '../Repositorio/Maestro/Imagenes/3/Ciencias/LAB_CEIII_QUIM_3GR.png', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_mat_audiovisuales`
--

CREATE TABLE `cat_mat_audiovisuales` (
  `id_mat_audiovisual` int(11) NOT NULL,
  `id_asignatura` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_bloque` int(11) NOT NULL,
  `id_perfil` int(11) NOT NULL,
  `nom_video` varchar(255) NOT NULL,
  `url_zip_normal` longtext NOT NULL,
  `url_zip_debvis` longtext NOT NULL,
  `url_v_normal` longtext NOT NULL,
  `url_v_debvis` longtext NOT NULL,
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_perfil`
--

CREATE TABLE `cat_perfil` (
  `id_perfil` int(11) NOT NULL,
  `perfil` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_perfil`
--

INSERT INTO `cat_perfil` (`id_perfil`, `perfil`) VALUES
(1, 'Docente'),
(2, 'Alumno');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cat_asignatura`
--
ALTER TABLE `cat_asignatura`
  ADD PRIMARY KEY (`id_asignatura`) USING BTREE,
  ADD KEY `nombre_asignatura` (`asignatura`),
  ADD KEY `asignatura` (`asignatura`);

--
-- Indices de la tabla `cat_bloque`
--
ALTER TABLE `cat_bloque`
  ADD PRIMARY KEY (`id_bloque`);

--
-- Indices de la tabla `cat_grado`
--
ALTER TABLE `cat_grado`
  ADD PRIMARY KEY (`id_grado`);

--
-- Indices de la tabla `cat_libros`
--
ALTER TABLE `cat_libros`
  ADD PRIMARY KEY (`id_libro`,`id_perfil`,`id_grado`,`id_asignatura`);

--
-- Indices de la tabla `cat_mat_audiovisuales`
--
ALTER TABLE `cat_mat_audiovisuales`
  ADD PRIMARY KEY (`id_mat_audiovisual`,`id_asignatura`,`id_grado`,`id_perfil`,`id_bloque`);

--
-- Indices de la tabla `cat_perfil`
--
ALTER TABLE `cat_perfil`
  ADD PRIMARY KEY (`id_perfil`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cat_asignatura`
--
ALTER TABLE `cat_asignatura`
  MODIFY `id_asignatura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `cat_bloque`
--
ALTER TABLE `cat_bloque`
  MODIFY `id_bloque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cat_grado`
--
ALTER TABLE `cat_grado`
  MODIFY `id_grado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cat_libros`
--
ALTER TABLE `cat_libros`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `cat_mat_audiovisuales`
--
ALTER TABLE `cat_mat_audiovisuales`
  MODIFY `id_mat_audiovisual` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cat_perfil`
--
ALTER TABLE `cat_perfil`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
