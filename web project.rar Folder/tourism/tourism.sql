-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 12, 2017 at 05:58 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tourism`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `Boo_ID` int(11) NOT NULL,
  `Boo_BookingDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Boo_Name` varchar(99) NOT NULL,
  `phone` int(11) NOT NULL,
  `Boo_DoB` date NOT NULL,
  `Boo_email` varchar(11) NOT NULL,
  `Boo_Country` varchar(11) NOT NULL,
  `Days` date NOT NULL,
  `TypeOftrip` varchar(20) NOT NULL,
  `Guider` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`Boo_ID`, `Boo_BookingDate`, `Boo_Name`, `phone`, `Boo_DoB`, `Boo_email`, `Boo_Country`, `Days`, `TypeOftrip`, `Guider`) VALUES
(1, '2017-12-02 13:16:23', 'sara', 0, '2017-12-03', 'aaa@aa.com', 'aaa', '2017-12-04', '', 'Sara'),
(2, '2017-12-02 13:18:02', 'alla', 0, '2017-12-19', 'dfsdsfs', 'xcvdsfg', '2017-12-14', '', 'Alaa'),
(3, '2017-12-02 13:22:43', 'hanan', 0, '0000-00-00', 'asasas', 'aa', '0000-00-00', '', 'Alaa'),
(4, '2017-12-02 13:23:28', 'soha', 0, '2013-01-01', 'fdsfsdfdsfs', 'AF', '2019-01-03', '', 'Sara'),
(5, '2017-12-04 02:12:43', 'mnerh', 0, '2011-04-02', 'xdcfsdhfsui', 'DZ', '2019-03-03', 'Half-Day', 'Sara'),
(6, '2017-12-12 15:21:13', 'latifa', 0, '2010-04-02', 'l@gmail.com', 'DZ', '2018-05-01', 'Half-Day', 'Hannan'),
(7, '2017-12-12 15:25:50', 'latifa', 5599, '2013-01-01', 'uuuu', 'AG', '2018-04-17', 'Many-Day', 'Hannan'),
(8, '2017-12-12 15:51:57', 'Amaal', 559979198, '2000-05-05', 'yaserabdulr', 'AF', '2017-02-03', '', 'Sara'),
(9, '2017-12-12 16:57:25', 'Mishaell', 2131, '2000-05-02', 'Mishaell@gm', 'AF', '2019-03-02', 'Full-Day', 'Hannan'),
(10, '2017-12-12 16:57:55', 'Lubna', 2342, '2011-03-03', 'aaadas', 'AS', '2019-04-03', 'Many-Day', 'Hannan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`Boo_ID`),
  ADD KEY `Boo_BookingDate` (`Boo_BookingDate`),
  ADD KEY `Boo_BookingDate_2` (`Boo_BookingDate`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `Boo_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
