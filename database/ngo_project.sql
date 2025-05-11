-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2025 at 08:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ngo_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `bankaccount`
--

CREATE TABLE `bankaccount` (
  `Account_No` varchar(50) NOT NULL,
  `Bank_Name` varchar(100) DEFAULT NULL,
  `NGO_ID` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bankaccount`
--

INSERT INTO `bankaccount` (`Account_No`, `Bank_Name`, `NGO_ID`) VALUES
('ACC001', 'State Bank of India', 'NGO001'),
('ACC002', 'ICICI Bank', 'NGO002');

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `Donation_ID` varchar(50) NOT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `Donor_Name` varchar(100) DEFAULT NULL,
  `NGO_ID` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `donation`
--

INSERT INTO `donation` (`Donation_ID`, `Amount`, `Date`, `Donor_Name`, `NGO_ID`) VALUES
('DON001', 10000.00, '2025-05-08 23:04:00', 'Ravi Kumar', 'NGO001'),
('DON002', 7500.00, '2024-12-05 14:20:00', 'Priya Mehra', 'NGO002');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `Event_ID` varchar(50) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `NGO_ID` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`Event_ID`, `Name`, `Date`, `Location`, `NGO_ID`) VALUES
('EV001', 'Tree Plantation Drive', '2024-10-12 18:29:00', 'Lalbagh, Bangalore', 'NGO002'),
('EV002', 'Blood Donation Camp', '2024-10-12 17:39:00', 'Kuvempunagar, Mysore', 'NGO001');

-- --------------------------------------------------------

--
-- Table structure for table `ngo`
--

CREATE TABLE `ngo` (
  `NGO_ID` varchar(50) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ngo`
--

INSERT INTO `ngo` (`NGO_ID`, `Name`, `Address`, `Phone`, `Email`) VALUES
('NGO001', 'Helping Hands', '123 MG Road, Mysore', '9876543210', 'contact@helpinghands.org'),
('NGO002', 'Green Future', '45 JP Nagar, Bangalore', '9988776655', 'info@greenfuture.in'),
('NGO1', 'Example NGO', '123 Main St', '123-456-7890', 'info@example.org');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `Team_ID` varchar(50) NOT NULL,
  `Team_Name` varchar(100) DEFAULT NULL,
  `Volunteer_ID` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`Team_ID`, `Team_Name`, `Volunteer_ID`) VALUES
('T001', 'Eco Warriors', 'VOL001'),
('T002', 'Life Savers', 'VOL002');

-- --------------------------------------------------------

--
-- Table structure for table `volunteer`
--

CREATE TABLE `volunteer` (
  `Volunteer_ID` varchar(50) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Age` int(11) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `volunteer`
--

INSERT INTO `volunteer` (`Volunteer_ID`, `Name`, `Age`, `Phone`, `Email`) VALUES
('VOL001', 'Anita Sharma', 22, '9123456780', 'anita@gmail.com'),
('VOL002', 'Rohit Sen', 24, '9234567890', 'rohit@gmail.com'),
('VOL003', 'Meena Iyer', 21, '9345678901', 'meena@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `volunteer_event`
--

CREATE TABLE `volunteer_event` (
  `Volunteer_ID` varchar(50) NOT NULL,
  `Event_ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `volunteer_event`
--

INSERT INTO `volunteer_event` (`Volunteer_ID`, `Event_ID`) VALUES
('VOL001', 'EV001'),
('VOL002', 'EV001'),
('VOL002', 'EV002'),
('VOL003', 'EV002');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bankaccount`
--
ALTER TABLE `bankaccount`
  ADD PRIMARY KEY (`Account_No`),
  ADD KEY `NGO_ID` (`NGO_ID`);

--
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`Donation_ID`),
  ADD KEY `NGO_ID` (`NGO_ID`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`Event_ID`),
  ADD KEY `NGO_ID` (`NGO_ID`);

--
-- Indexes for table `ngo`
--
ALTER TABLE `ngo`
  ADD PRIMARY KEY (`NGO_ID`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`Team_ID`),
  ADD KEY `Volunteer_ID` (`Volunteer_ID`);

--
-- Indexes for table `volunteer`
--
ALTER TABLE `volunteer`
  ADD PRIMARY KEY (`Volunteer_ID`);

--
-- Indexes for table `volunteer_event`
--
ALTER TABLE `volunteer_event`
  ADD PRIMARY KEY (`Volunteer_ID`,`Event_ID`),
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bankaccount`
--
ALTER TABLE `bankaccount`
  ADD CONSTRAINT `bankaccount_ibfk_1` FOREIGN KEY (`NGO_ID`) REFERENCES `ngo` (`NGO_ID`);

--
-- Constraints for table `donation`
--
ALTER TABLE `donation`
  ADD CONSTRAINT `donation_ibfk_1` FOREIGN KEY (`NGO_ID`) REFERENCES `ngo` (`NGO_ID`);

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_ibfk_1` FOREIGN KEY (`NGO_ID`) REFERENCES `ngo` (`NGO_ID`);

--
-- Constraints for table `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `team_ibfk_1` FOREIGN KEY (`Volunteer_ID`) REFERENCES `volunteer` (`Volunteer_ID`);

--
-- Constraints for table `volunteer_event`
--
ALTER TABLE `volunteer_event`
  ADD CONSTRAINT `volunteer_event_ibfk_1` FOREIGN KEY (`Volunteer_ID`) REFERENCES `volunteer` (`Volunteer_ID`),
  ADD CONSTRAINT `volunteer_event_ibfk_2` FOREIGN KEY (`Event_ID`) REFERENCES `event` (`Event_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
