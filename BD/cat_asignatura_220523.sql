-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2023 a las 00:50:40
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
(23, 'Agricultura. Fruticultura'),
(18, 'Agricultura. Granos Básicos'),
(27, 'Agricultura. Horticultura'),
(10, 'Artes Visuales'),
(2, 'Ciencias y Tecnología. Biología'),
(3, 'Ciencias y Tecnología. Física'),
(4, 'Ciencias y Tecnología. Química'),
(17, 'Conservación y preparación de alimentos. Conservación de verduras y productos animales'),
(30, 'Conservación y Preparación de Alimentos. Conservas de frutas'),
(24, 'Conservación y preparación de alimentos. Panadería y repostería'),
(29, 'Cría y manejo de pequeñas especies. Apicultura'),
(25, 'Cría y manejo de pequeñas especies. Avicultura'),
(16, 'Cría y manejo de pequeñas especies. Cunicultura'),
(11, 'Danza'),
(15, 'Educación Física'),
(5, 'Formación Cívica y Ética'),
(6, 'Geografía'),
(7, 'Historia'),
(26, 'Infraestructura a través del reúso'),
(14, 'Infraestructura. Infraestructura y cuidado del medio ambiente'),
(9, 'Lengua Extranjera. Inglés'),
(1, 'Lengua Materna. Español'),
(8, 'Matemáticas'),
(12, 'Música'),
(20, 'Orientación y Tutoría'),
(13, 'Teatro'),
(21, 'Tecnología'),
(19, 'Tecnología Administrativa. Funciones Administrativas'),
(22, 'Tecnología Administrativa. Funciones Contables'),
(28, 'Tecnología Administrativa. Funciones operativas');

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
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cat_asignatura`
--
ALTER TABLE `cat_asignatura`
  MODIFY `id_asignatura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
