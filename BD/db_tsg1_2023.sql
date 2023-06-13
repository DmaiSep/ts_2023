-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2023 a las 23:34:50
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
-- Base de datos: `db_tsg1_2023`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_categoria_libro`
--

CREATE TABLE `cat_categoria_libro` (
  `id_categoria_libro` int(11) NOT NULL,
  `categoria_libro` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_categoria_libro`
--

INSERT INTO `cat_categoria_libro` (`id_categoria_libro`, `categoria_libro`) VALUES
(1, 'Lenguajes'),
(2, 'Saberes y pensamiento científico'),
(3, 'De lo humano y lo comunitario'),
(4, 'Ética, naturaleza y sociedades'),
(5, 'Nuestro libro de proyectos'),
(6, 'Múltiples lenguajes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_categoria_video`
--

CREATE TABLE `cat_categoria_video` (
  `id_categoria_video` int(11) NOT NULL,
  `categoria_video` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_categoria_video`
--

INSERT INTO `cat_categoria_video` (`id_categoria_video`, `categoria_video`) VALUES
(1, 'Videos para los proyectos parciales de aula'),
(2, 'Videos para las estrategias detonadoras'),
(3, 'Videos académicos con información académica'),
(4, 'Videos para la semana de inducción'),
(5, 'Videos integración comunitaria'),
(6, 'Videos para la semana de cierre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_coleccion`
--

CREATE TABLE `cat_coleccion` (
  `id_coleccion` int(11) NOT NULL,
  `coleccion` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_coleccion`
--

INSERT INTO `cat_coleccion` (`id_coleccion`, `coleccion`) VALUES
(1, 'Ximhai'),
(2, 'Sk´asolil'),
(3, 'Nanahuatzin');

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
(1, 'Primer Grado'),
(2, 'Segundo Grado'),
(3, 'Tercer Grado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_tipo_informatico`
--

CREATE TABLE `cat_tipo_informatico` (
  `id_tipo_informatico` int(11) NOT NULL,
  `tipo_informatico` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_tipo_informatico`
--

INSERT INTO `cat_tipo_informatico` (`id_tipo_informatico`, `tipo_informatico`) VALUES
(1, 'Informáticos para proyectos académicos'),
(2, 'Informáticos para proyectos de integración comunitaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_tipo_material`
--

CREATE TABLE `cat_tipo_material` (
  `id_tipo_material` int(11) NOT NULL,
  `tipo_material` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_tipo_material`
--

INSERT INTO `cat_tipo_material` (`id_tipo_material`, `tipo_material`) VALUES
(1, 'Libros'),
(2, 'Audiovisuales (videos)'),
(3, 'Informáticos'),
(4, 'Cortometrajes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cat_tipo_video`
--

CREATE TABLE `cat_tipo_video` (
  `id_tipo_video` int(11) NOT NULL,
  `tipo_video` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cat_tipo_video`
--

INSERT INTO `cat_tipo_video` (`id_tipo_video`, `tipo_video`) VALUES
(1, 'Videos para proyectos académicos'),
(2, 'Videos para proyectos de integración comunitaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lib_cortometrajes`
--

CREATE TABLE `lib_cortometrajes` (
  `id_cortometraje` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `autor` varchar(500) NOT NULL,
  `descripcion` text NOT NULL,
  `fase` varchar(250) NOT NULL DEFAULT 'Fase 6',
  `anio` int(4) NOT NULL,
  `duracion` varchar(20) NOT NULL,
  `img` varchar(250) NOT NULL,
  `url` varchar(500) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lib_cortometrajes`
--

INSERT INTO `lib_cortometrajes` (`id_cortometraje`, `id_grado`, `titulo`, `autor`, `descripcion`, `fase`, `anio`, `duracion`, `img`, `url`, `estado`) VALUES
(1, 1, '¡Smuack!', 'Alejandra Sánchez', 'Luisa es una mujer cuya vida gira en torno a su trabajo en un bar gay. El encuentro con su sobrina de 8 años la hará asumir una inesperada maternidad al tiempo que tendrá que confrontar su identidad sexual.', 'Fase 6', 2015, '23min', './Repositorio/cortometrajes/img/smuack.png', 'https://qr.page/g/3ft1zQe4RXS', 1),
(2, 1, 'Polvo de estrellas', 'Aldo Sotelo Lázaro', 'Adán es un niño que se ve obligado a recolectar basura junto con su padre Hilario para subsistir. Una visita inesperada en la escuela hará que el chico cambie por completo su percepción del mundo.', 'Fase 6', 2017, '15min', './Repositorio/cortometrajes/img/polvo-de-estrellas.png', 'https://qr.page/g/36IatHZbf9g', 1),
(3, 1, 'Carrizos', 'Dinazar Urbina Mata', ' En el campo mixteco de Oaxaca vive Carmen con sus abuelos. Una sequía amenaza la milpa de la familia, por lo que Carmen busca la forma de hacer llover.', 'Fase 6', 2016, '12min', './Repositorio/cortometrajes/img/carrizos.png', 'https://qr.page/g/3yZ41h7hhxW', 1),
(4, 1, 'Poliangular', 'Alexandra Castellanos', 'Los buscadores persiguen objetos misteriosos que parecen ser inalcanzables, lo que realmente quieren averiguar es qué son esas formas secretas y qué pasará una vez que las atrapen.', 'Fase 6', 2017, '9min', './Repositorio/cortometrajes/img/poliangular.png', 'https://qr.page/g/3V6lwZMQ2RD', 1),
(5, 1, 'A la distancia', 'Víctor Audiffred', 'Los sentimientos en una pareja de la tercera edad no tienen límites. Adela recibe la visita de René. La distancia entre ellos no les permite estar juntos. Sin embargo, de una manera ingeniosa, utilizan una jaula de pájaros y una cuerda para pasarse objetos desde un primer piso hacia la planta baja. René le lleva un valioso regalo, mismo que le permitirá decirle cuánto la ama.', 'Fase 6', 2016, '6min', './Repositorio/cortometrajes/img/a-la-distancia.png', 'https://qr.page/g/5dzHcM6H8xN', 1),
(6, 1, 'El grifo', 'Dan Chávez', 'Joan está por comenzar su vida adulta dejando atrás todo lo que conoce incluyendo a su madre. La inminente separación provoca que las emociones de ambos choquen constantemente en medio de lo cotidiano y la certeza de que nada volverá a ser igual. Mientras que la tensión entre ellos va en aumento, el grifo de la cocina no deja de gotear anunciando que todo lo que se acumula en algún momento tendrá que explotar.', 'Fase 6', 2016, '15min', './Repositorio/cortometrajes/img/el-grifo.png', 'https://qr.page/g/1gfqOOksdPr', 1),
(7, 1, 'Lejos de casa', 'Mayra Veliz', 'Risa es una chica japonesa en una excursión en México que queda varada en un restaurante de carretera donde un joven mexicano intentará ayudarla.', 'Fase 6', 2017, '14min', './Repositorio/cortometrajes/img/lejos-de-casa.png', 'https://qr.page/g/3dWLZgwfZIs', 1),
(8, 1, 'Horas roca', 'Sandra Concepción Reynoso Estrada', 'Luego de que Elena sufriera un accidente, su padre Anselmo se ve obligado a cuidarla. A pesar de no tener una muy buena relación se verán inmersos en una convivencia que cambiará su vínculo afectivo.', 'Fase 6', 2017, '22min', './Repositorio/cortometrajes/img/horas-roca.png', 'https://qr.page/g/3QcuXnklUVY', 1),
(9, 1, 'Los gatos', 'Alejandro Ríos', 'Un gato callejero conoce a un anciano que cambia su vida para siempre. Todo parece normal hasta que se descubren los secretos se esconden detrás de la puerta del cálido hogar. El amor es un sentimiento complejo, el cual no se debe de tomar la ligera.', 'Fase 6', 2016, '9min', './Repositorio/cortometrajes/img/los-gatos.png', 'https://qr.page/g/4WROOaAYbal', 1),
(10, 1, 'El don de los espejos', 'Mara Soler', 'Un obstinado coleccionista de peces se enfrenta a sus propios límites en esta historia marítima.', 'Fase 6', 2014, '10min', './Repositorio/cortometrajes/img/el-don-de-los-espejos.png', 'https://qr.page/g/4oL1I2Ca8Al', 1),
(11, 1, 'Leche', 'Gilberto González Penilla', 'Edgar y Verónica trabajan en una lechería en diferentes horarios. Este matrimonio espera paciente el cambio de turno para pasar más tiempo juntos.', 'Fase 6', 2016, '19min', './Repositorio/cortometrajes/img/leche.png', 'https://qr.page/g/5SFmRBh0bT', 1),
(12, 1, 'Espero que estés bien', 'Lucía Díaz Álvarez', 'Un inmigrante japonés se reencuentra con su madre en la Ciudad de México. Después de mantener distancia con su familia, su relación es casi inexistente. Él se ha ido lejos de casa en busca de una vida más amable. Sin embargo, las exigencias familiares no parecen ayudarle en su intento por seguir adelante.', 'Fase 6', 2016, '16min', './Repositorio/cortometrajes/img/espero-que-estés-bien.png', 'https://qr.page/g/4t174S1oQJb', 1),
(13, 1, 'Semillas de guamúchil', 'Carolina Corral', 'Cinco mujeres que descubren la escritura creativa en prisión, comparten su poesía ahora en su vida en libertad.', 'Fase 6', 2016, '17min', './Repositorio/cortometrajes/img/semillas-de-guamúchil.png', 'https://qr.page/g/2LW94LVlwEV', 1),
(14, 1, 'Bingo', 'Andrés Borda García', 'Un grupo de ancianos se reúne en las noches para jugar bingo, Mario se enfrentará con el azar y podría perder todo lo que ya ganó por su avaricia.', 'Fase 6', 2014, '11min', './Repositorio/cortometrajes/img/bingo.png', 'https://qr.page/g/3ggIYQ3pmV5', 1),
(15, 1, 'Un día en familia Pedro', '\"Zulu\" González', 'Es un domingo familiar cualquiera en el Bosque de Chapultepec. A un patriarca que se dedica al boxeo, ni el paseo en lancha o visitar el zoológico parecen alegrarlo. Su apatía cambia con una pregunta que nos lleva a descubrir que el parque es un lugar donde la felicidad existe, aunque tiene su precio.', 'Fase 6', 2013, '7min', './Repositorio/cortometrajes/img/un-día-en-familia.png', 'https://qr.page/g/3sV8fCRl0ie', 1),
(16, 1, 'El último consejo', 'Itandehui Jansen', 'En la ceremonia de cambio de autoridad de un pueblo indígena, donde un consejo de ancianos transmite el mando a otro de hombres más jóvenes, se cuenta públicamente todo el dinero que existe en la caja del pueblo. Al siguiente día la caja está vacía. ¿Quién se robó el dinero?', 'Fase 6', 2012, '12min', './Repositorio/cortometrajes/img/el-último-consejo.png', 'https://qr.page/g/5m3ivBlT7tK', 1),
(17, 1, 'Luz de día', 'Mauricio Calderón Mora', 'Luisa es vigilante de un estacionamiento subterráneo desde hace quince años. Ella está secretamente enamorada de Hilario, un joven electricista con sueños y aspiraciones, quien con sentido del humor intenta convencerla de romper su rutina.', 'Fase 6', 2016, '16min', './Repositorio/cortometrajes/img/luz-de-día.png', 'https://qr.page/g/MYfd2TSOzt', 1),
(18, 1, 'La curiosa conquista del ampere', 'Ramón Orozco Stoltenberg', 'Un joven muere electrocutado, su cuerpo extraordinariamente continúa vivo por unos días, emitiendo una energía que es explotada por su familia.', 'Fase 6', 2008, '12min', './Repositorio/cortometrajes/img/la-curiosa-conquista-del-ampere.png', 'https://qr.page/g/5gwzko0MxFx', 1),
(19, 1, 'Estatuas', 'Roberto Fiesco', 'La ceremonia de inauguración de una estatua, en la que Carlitos dirá el discurso conmemorativo, se convierte en el espacio donde se manifestará el descontento y los reclamos de una ciudad que se levanta agreste en los límites con el campo.', 'Fase 6', 2013, '17min', './Repositorio/cortometrajes/img/estatuas.png', 'https://qr.page/g/3st3R3EFZuI', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lib_informaticos`
--

CREATE TABLE `lib_informaticos` (
  `id_informatico` int(11) NOT NULL,
  `id_tipo_informatico` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `tomo` varchar(20) NOT NULL,
  `descripcion` text NOT NULL,
  `fase` varchar(250) NOT NULL DEFAULT 'Fase 6',
  `img` varchar(250) NOT NULL,
  `url` varchar(500) NOT NULL,
  `zip` varchar(900) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lib_libros`
--

CREATE TABLE `lib_libros` (
  `id_libro` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_categoria_libro` int(11) NOT NULL,
  `id_coleccion` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `fase` varchar(250) NOT NULL DEFAULT 'Fase 6',
  `img` varchar(250) NOT NULL,
  `url` varchar(500) NOT NULL,
  `zip` varchar(900) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lib_videos`
--

CREATE TABLE `lib_videos` (
  `id_video` int(11) NOT NULL,
  `id_tipo_video` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_categoria_video` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `descripcion` text NOT NULL,
  `fase` varchar(250) NOT NULL DEFAULT 'Fase 6',
  `img` varchar(250) NOT NULL,
  `url` varchar(500) NOT NULL,
  `zip` varchar(900) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lib_visitas`
--

CREATE TABLE `lib_visitas` (
  `id_visitas` int(11) NOT NULL,
  `id_material` int(11) NOT NULL,
  `id_tipo_material` int(11) NOT NULL,
  `accion` tinyint(1) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `zona` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cat_categoria_libro`
--
ALTER TABLE `cat_categoria_libro`
  ADD PRIMARY KEY (`id_categoria_libro`);

--
-- Indices de la tabla `cat_categoria_video`
--
ALTER TABLE `cat_categoria_video`
  ADD PRIMARY KEY (`id_categoria_video`);

--
-- Indices de la tabla `cat_coleccion`
--
ALTER TABLE `cat_coleccion`
  ADD PRIMARY KEY (`id_coleccion`);

--
-- Indices de la tabla `cat_grado`
--
ALTER TABLE `cat_grado`
  ADD PRIMARY KEY (`id_grado`);

--
-- Indices de la tabla `cat_tipo_informatico`
--
ALTER TABLE `cat_tipo_informatico`
  ADD PRIMARY KEY (`id_tipo_informatico`);

--
-- Indices de la tabla `cat_tipo_material`
--
ALTER TABLE `cat_tipo_material`
  ADD PRIMARY KEY (`id_tipo_material`);

--
-- Indices de la tabla `cat_tipo_video`
--
ALTER TABLE `cat_tipo_video`
  ADD PRIMARY KEY (`id_tipo_video`);

--
-- Indices de la tabla `lib_cortometrajes`
--
ALTER TABLE `lib_cortometrajes`
  ADD PRIMARY KEY (`id_cortometraje`,`id_grado`);

--
-- Indices de la tabla `lib_informaticos`
--
ALTER TABLE `lib_informaticos`
  ADD PRIMARY KEY (`id_informatico`,`id_tipo_informatico`,`id_grado`) USING BTREE;

--
-- Indices de la tabla `lib_libros`
--
ALTER TABLE `lib_libros`
  ADD PRIMARY KEY (`id_libro`,`id_grado`,`id_categoria_libro`,`id_coleccion`);

--
-- Indices de la tabla `lib_videos`
--
ALTER TABLE `lib_videos`
  ADD PRIMARY KEY (`id_video`,`id_tipo_video`,`id_grado`,`id_categoria_video`);

--
-- Indices de la tabla `lib_visitas`
--
ALTER TABLE `lib_visitas`
  ADD PRIMARY KEY (`id_visitas`,`id_material`,`id_tipo_material`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cat_categoria_libro`
--
ALTER TABLE `cat_categoria_libro`
  MODIFY `id_categoria_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `cat_categoria_video`
--
ALTER TABLE `cat_categoria_video`
  MODIFY `id_categoria_video` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `cat_coleccion`
--
ALTER TABLE `cat_coleccion`
  MODIFY `id_coleccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cat_grado`
--
ALTER TABLE `cat_grado`
  MODIFY `id_grado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `cat_tipo_informatico`
--
ALTER TABLE `cat_tipo_informatico`
  MODIFY `id_tipo_informatico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `cat_tipo_material`
--
ALTER TABLE `cat_tipo_material`
  MODIFY `id_tipo_material` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cat_tipo_video`
--
ALTER TABLE `cat_tipo_video`
  MODIFY `id_tipo_video` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `lib_cortometrajes`
--
ALTER TABLE `lib_cortometrajes`
  MODIFY `id_cortometraje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `lib_informaticos`
--
ALTER TABLE `lib_informaticos`
  MODIFY `id_informatico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lib_libros`
--
ALTER TABLE `lib_libros`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lib_videos`
--
ALTER TABLE `lib_videos`
  MODIFY `id_video` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lib_visitas`
--
ALTER TABLE `lib_visitas`
  MODIFY `id_visitas` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
