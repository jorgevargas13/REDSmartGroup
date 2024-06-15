-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: juegosweb
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `progreso`
--

DROP TABLE IF EXISTS `progreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `progreso` (
  `iden` double NOT NULL,
  `nombre` text NOT NULL,
  `puntaje` json NOT NULL,
  `terminado` json NOT NULL,
  `rutaTema1` json NOT NULL,
  `rutaTema2` json NOT NULL,
  `rutaTema3` json NOT NULL,
  PRIMARY KEY (`iden`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `progreso`
--

LOCK TABLES `progreso` WRITE;
/*!40000 ALTER TABLE `progreso` DISABLE KEYS */;
/*!40000 ALTER TABLE `progreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `iden` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `puntajeTotal` int NOT NULL,
  `tiempoTotal` time NOT NULL,
  `identificacion` double NOT NULL,
  PRIMARY KEY (`iden`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES (4,'w',100,'00:00:03',5555555555),(5,'Elian Zajir Casallas Dalel',799,'00:03:12',1006877253),(6,'w',100,'00:00:04',8888888888),(7,'w',100,'00:00:04',8888888888),(8,'e',67,'00:00:06',7777777777),(9,'f',100,'00:00:15',1111111111),(10,'tr',100,'00:00:03',2222222222),(11,'g',62,'00:00:25',3333333333),(12,'g',62,'00:00:25',3333333333),(13,'g',62,'00:00:25',3333333333),(14,'m',67,'00:00:09',4444444444),(15,'m',67,'00:00:09',4444444444),(16,'er',89,'00:00:15',9999999999),(17,'Elian Zajir Casallas Dalel',830,'00:01:53',1006877253),(18,'w',771,'00:01:51',5555555555),(19,'w',824,'00:01:53',5555555555),(20,'w',824,'00:01:53',5555555555),(21,'w',824,'00:01:53',5555555555),(22,'w',824,'00:01:53',5555555555),(23,'w',824,'00:01:53',5555555555),(24,'w',824,'00:01:53',5555555555),(25,'w',824,'00:01:53',5555555555),(26,'w',824,'00:01:53',5555555555),(27,'w',824,'00:01:53',5555555555),(28,'w',824,'00:01:53',5555555555),(29,'w',824,'00:01:53',5555555555),(30,'w',824,'00:01:53',5555555555),(31,'w',846,'00:02:28',5555555555),(32,'w',833,'00:01:34',5555555555);
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-28 20:14:05
