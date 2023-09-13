CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `body` varchar(500) NOT NULL,
  `createdAt` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
