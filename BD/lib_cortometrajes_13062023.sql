-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2023 a las 00:30:42
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
(12, 1, 'Espero que estés bien', 'Lucía Díaz Álvarez', 'Un inmigrante japonés se reencuentra con su madre en la Ciudad de México. Después de mantener distancia con su familia, su relación es casi inexistente. Él se ha ido lejos de casa en busca de una vida más amable. Sin embargo, las exigencias familiares no parecen ayudarle en su intento por seguir adelante.', 'Fase 6', 2016, '16min', './Repositorio/cortometrajes/img/espero-que-estes-bien.png', 'https://qr.page/g/4t174S1oQJb', 1),
(13, 1, 'Semillas de guamúchil', 'Carolina Corral', 'Cinco mujeres que descubren la escritura creativa en prisión, comparten su poesía ahora en su vida en libertad.', 'Fase 6', 2016, '17min', './Repositorio/cortometrajes/img/semillas-de-guamuchil.png', 'https://qr.page/g/2LW94LVlwEV', 1),
(14, 1, 'Bingo', 'Andrés Borda García', 'Un grupo de ancianos se reúne en las noches para jugar bingo, Mario se enfrentará con el azar y podría perder todo lo que ya ganó por su avaricia.', 'Fase 6', 2014, '11min', './Repositorio/cortometrajes/img/bingo.png', 'https://qr.page/g/3ggIYQ3pmV5', 1),
(15, 1, 'Un día en familia Pedro', '\"Zulu\" González', 'Es un domingo familiar cualquiera en el Bosque de Chapultepec. A un patriarca que se dedica al boxeo, ni el paseo en lancha o visitar el zoológico parecen alegrarlo. Su apatía cambia con una pregunta que nos lleva a descubrir que el parque es un lugar donde la felicidad existe, aunque tiene su precio.', 'Fase 6', 2013, '7min', './Repositorio/cortometrajes/img/un-dia-en-familia.png', 'https://qr.page/g/3sV8fCRl0ie', 1),
(16, 1, 'El último consejo', 'Itandehui Jansen', 'En la ceremonia de cambio de autoridad de un pueblo indígena, donde un consejo de ancianos transmite el mando a otro de hombres más jóvenes, se cuenta públicamente todo el dinero que existe en la caja del pueblo. Al siguiente día la caja está vacía. ¿Quién se robó el dinero?', 'Fase 6', 2012, '12min', './Repositorio/cortometrajes/img/el-ultimo-consejo.png', 'https://qr.page/g/5m3ivBlT7tK', 1),
(17, 1, 'Luz de día', 'Mauricio Calderón Mora', 'Luisa es vigilante de un estacionamiento subterráneo desde hace quince años. Ella está secretamente enamorada de Hilario, un joven electricista con sueños y aspiraciones, quien con sentido del humor intenta convencerla de romper su rutina.', 'Fase 6', 2016, '16min', './Repositorio/cortometrajes/img/luz-de-dia.png', 'https://qr.page/g/MYfd2TSOzt', 1),
(18, 1, 'La curiosa conquista del ampere', 'Ramón Orozco Stoltenberg', 'Un joven muere electrocutado, su cuerpo extraordinariamente continúa vivo por unos días, emitiendo una energía que es explotada por su familia.', 'Fase 6', 2008, '12min', './Repositorio/cortometrajes/img/la-curiosa-conquista-del-ampere.png', 'https://qr.page/g/5gwzko0MxFx', 1),
(19, 1, 'Estatuas', 'Roberto Fiesco', 'La ceremonia de inauguración de una estatua, en la que Carlitos dirá el discurso conmemorativo, se convierte en el espacio donde se manifestará el descontento y los reclamos de una ciudad que se levanta agreste en los límites con el campo.', 'Fase 6', 2013, '17min', './Repositorio/cortometrajes/img/estatuas.png', 'https://qr.page/g/3st3R3EFZuI', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lib_cortometrajes`
--
ALTER TABLE `lib_cortometrajes`
  ADD PRIMARY KEY (`id_cortometraje`,`id_grado`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lib_cortometrajes`
--
ALTER TABLE `lib_cortometrajes`
  MODIFY `id_cortometraje` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
