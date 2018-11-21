-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 21 nov. 2018 à 23:45
-- Version du serveur :  10.1.30-MariaDB
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `covoiturage`
--

-- --------------------------------------------------------

--
-- Structure de la table `conducteurs`
--

CREATE TABLE `conducteurs` (
  `id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `nb_etoils` int(11) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `conducteurs`
--

INSERT INTO `conducteurs` (`id`, `id_utilisateur`, `nb_etoils`, `updated_at`, `created_at`) VALUES
(1, 1, 0, NULL, NULL),
(2, 5, 0, NULL, NULL),
(3, 12, 0, NULL, NULL),
(4, 13, 0, NULL, NULL),
(5, 14, 0, NULL, NULL),
(6, 15, 0, NULL, NULL),
(7, 16, 0, NULL, NULL),
(8, 18, 0, NULL, NULL),
(9, 21, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE `notes` (
  `id_conducteur` int(11) NOT NULL,
  `id_passager` int(11) NOT NULL,
  `note` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`id_conducteur`, `id_passager`, `note`) VALUES
(1, 3, 3),
(1, 10, 10);

-- --------------------------------------------------------

--
-- Structure de la table `passagers`
--

CREATE TABLE `passagers` (
  `id` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `nb_reservation` int(3) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `passagers`
--

INSERT INTO `passagers` (`id`, `id_utilisateur`, `nb_reservation`, `updated_at`, `created_at`) VALUES
(1, 4, 0, NULL, NULL),
(2, 6, 0, NULL, NULL),
(3, 7, 1, NULL, NULL),
(4, 8, 0, NULL, NULL),
(5, 9, 0, NULL, NULL),
(6, 10, 0, NULL, NULL),
(7, 11, 0, NULL, NULL),
(8, 17, 0, NULL, NULL),
(9, 19, 0, NULL, NULL),
(10, 20, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `idreservation` int(11) NOT NULL,
  `date_reservation` varchar(30) NOT NULL,
  `id_trajet` int(11) DEFAULT NULL,
  `id_passager` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`idreservation`, `date_reservation`, `id_trajet`, `id_passager`, `updated_at`, `created_at`) VALUES
(2, '2018-01-28 02:13:33', 3, 1, NULL, NULL),
(3, '2018-01-28 03:01:25', 1, 1, NULL, NULL),
(4, '2018-01-28 12:49:01', 1, 2, NULL, NULL),
(7, '2018-01-28 17:09:19', 8, 1, NULL, NULL),
(8, '2018-01-28 17:09:32', 8, 2, NULL, NULL),
(9, '2018-01-28 17:09:42', 8, 3, NULL, NULL),
(10, '2018-01-29', 1, 3, NULL, NULL),
(11, '2018-01-30', 3, 3, NULL, NULL),
(12, '2018-02-08', 8, 3, NULL, NULL),
(13, '2018-02-08', 10, 3, NULL, NULL),
(14, '2018-11-13', 4, 10, NULL, NULL),
(15, '2018-11-13', 1, 10, NULL, NULL),
(16, '2018-11-13', 11, 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `trajets`
--

CREATE TABLE `trajets` (
  `id` int(11) NOT NULL,
  `date_depart` datetime NOT NULL,
  `date_arrive` datetime NOT NULL,
  `lieu_depart` varchar(75) NOT NULL,
  `lieu_arrive` varchar(75) NOT NULL,
  `prix` decimal(6,2) NOT NULL,
  `id_conducteur` int(11) DEFAULT NULL,
  `nbplace` int(2) NOT NULL DEFAULT '4',
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `trajets`
--

INSERT INTO `trajets` (`id`, `date_depart`, `date_arrive`, `lieu_depart`, `lieu_arrive`, `prix`, `id_conducteur`, `nbplace`, `updated_at`, `created_at`) VALUES
(1, '2018-12-02 00:00:00', '2018-12-02 00:00:00', 'Rabat al irfan', 'Marrakech Rue Mohammed V', '200.00', 1, 2, NULL, NULL),
(3, '2018-12-01 00:00:00', '2018-12-01 00:00:00', 'Casablanca sidi maarouf rue zaytona', 'Fes Rue Moulay driss', '110.00', 1, 3, NULL, NULL),
(4, '2018-05-12 00:00:00', '2018-07-12 00:00:00', 'Casablanca Enseme trik el jadida', 'Tetouan nassim rue 44', '75.80', 1, 2, NULL, NULL),
(6, '2018-05-05 00:00:00', '2018-06-05 00:00:00', 'Quartier mamouni sidi moumen Casablanca', 'Quartier gauchier Agadir', '190.00', 2, 5, NULL, NULL),
(8, '2018-05-02 00:00:00', '2018-06-02 00:00:00', 'Casablanca sidi maarouf rue zaytona', 'sidi kasem 7ay ridouane', '79.00', 5, 3, NULL, NULL),
(9, '2018-05-22 00:00:00', '2018-05-23 00:00:00', 'Tanger Rue mosaada', 'Marrakech hay nakhil', '140.50', 6, 4, NULL, NULL),
(10, '2018-03-12 00:00:00', '2018-03-12 00:00:00', 'Casablanca maarif rue nassim', 'Fes hay al kholoud', '111.50', 7, 3, NULL, NULL),
(11, '2019-01-01 00:00:00', '2019-05-05 00:00:00', 'Casablanca', 'Rabat', '35.00', 9, 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) DEFAULT NULL,
  `prenom` varchar(25) DEFAULT NULL,
  `sex` varchar(1) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `adresse` varchar(75) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `telephone` varchar(10) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `img_prf` varchar(45) DEFAULT '"C:/fileup/file.jpg"',
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prenom`, `sex`, `date_naissance`, `adresse`, `email`, `password`, `telephone`, `description`, `img_prf`, `updated_at`, `created_at`) VALUES
(1, 'kamali', 'mounir', 'M', '1993-02-23', 'Rue nassim hay soumaya N 55 casablanca', 'm.kamali@gmail.com', 'bb14579504160ce4fcaf35cf78c60bc1', '0656538805', 'je suis le conducteur numero 1 yay!', 'fileup/avatar.jpg', NULL, NULL),
(2, 'hatimy', 'abdellah', 'M', '1995-01-01', 'Rue 7ay riad rabat', 'abdo.hat@gmail.com', '267c88a9c130619b5e8fe370c0ae7730', '0655555555', 'hellooo', 'fileup/avatar.jpg', NULL, NULL),
(3, 'hat', 'abdo', 'M', '1995-02-02', 'samsamasmsam asnsdknkdn sakdnskds sdaknsa', 'm.abdo@gmail.com', '267c88a9c130619b5e8fe370c0ae7730', '0656538805', 'helooo', 'fileup/avatar.jpg', NULL, NULL),
(4, 'mossaid', 'hamza', 'M', '1993-02-02', 'Rue zrketouni Casablanca', 'm.hamza@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0625369588', 'bonjour tout le monde cv??', 'fileup/avatar.jpg', NULL, NULL),
(5, 'selami', 'rachid', 'M', '1998-05-06', 'Rue 7ay riad rabat', 'm.rachid@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0688947523', 'hello there!!!', 'fileup/avatar.jpg', NULL, NULL),
(6, 'sereghini', 'ali', 'M', '1992-05-15', 'Db ghelef casablanca', 'm.alis@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0655234520', 'hello I\'m a new passenger', 'fileup/avatar.jpg', NULL, NULL),
(7, 'pass1', 'surnm', 'F', '1992-11-26', 'samsamasmsam asnsdknkdn sakdnskds sdaknsa', 'm.pass@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0656538805', 'heyyyyyyyyyy', 'fileup/avatar.jpg', NULL, NULL),
(8, 'kou', 'pas', 'M', '2000-02-02', 'Rue nassim hay soumaya N 55 casablanca', 'm.kou@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0656538805', 'heeeeeeeeeee', 'fileup/avatar.jpg', NULL, NULL),
(9, 'aminos', 'am', 'F', '2001-08-06', 'samsamasmsam asnsdknkdn sakdnskds sdaknsa', 'aminnos@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0656538805', 'heyyyyyyyy', 'fileup/avatar.jpg', NULL, NULL),
(10, 'parami', 'stali', 'F', '1980-06-04', 'Rue 7ay riad rabat', 'parami@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0625369588', 'turu ture utrue', 'fileup/avatar.jpg', NULL, NULL),
(11, 'alaoui', 'faouzi', 'M', '1996-12-06', 'Db ghelef casablanca', 'f.alaoui@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0688947523', 'hey hey hey', 'fileup/avatar.jpg', NULL, NULL),
(12, 'moudni', 'ismail', 'M', '1998-12-30', 'Rue 7ay riad rabat', 'msk@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0655555555', 'asdasjn', 'fileup/avatar.jpg', NULL, NULL),
(13, 'mahmoudi', 'abdellah', 'M', '1991-05-05', 'Db chorfa casablanca', 'mahmoudi.hassan@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0684751296', 'hello everyone', 'C:/fileup/avatar.jpg', NULL, NULL),
(14, 'saidi', 'karim', 'M', '1993-11-30', 'Rue nassim hay soumaya N 55 casablanca', 'karimis@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0655555555', 'oui cv??', 'fileup/avatar.jpg', NULL, NULL),
(15, 'alami', 'ayoub', 'M', '1995-05-05', 'Rue mossaada Tanger', 'ayoub.ala@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0655334178', 'Bonjour tout le monde!!', 'fileup/img.jpg', NULL, NULL),
(16, 'ismaili', 'hanane', 'F', '2018-05-06', 'Rue nassim Tetouan', 'hanaa@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0648759612', 'Bonjour tout le monde', 'fileup/img.jpg', NULL, NULL),
(17, 'mouniri', 'ahmed', 'M', '1993-02-05', 'Rue Nassim agdal Rabat', 'ahmedmouniri@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '0659781423', 'Hi Everyone!', 'fileup/ahmed.jpg', NULL, NULL),
(18, 'chraybi', 'ayoub', 'M', '1992-02-02', 'Rue Nassim agdal Rabat', 'ayoubchraybi@gmail.com', 'c62672c961ec63233d96e0fc9332f026', '0659781412', 'hi everyone ...', 'fileup/ali.jpg', NULL, NULL),
(19, 'hatab', 'abhat', 'M', '1996-01-01', 'Rue RAYHANE Rabat', 'hatab@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', '0689457811', 'Bonjour Tout le monde....', 'fileup/ahmed.jpg', NULL, NULL),
(20, 'extest', 'extest', 'M', '1995-01-01', 'extest', 'extest@gmail.com', 'f27f6f1c7c5cbf4e3e192e0a47b85300', '0689457811', 'ppp', 'fileup/abdel.jpg', NULL, NULL),
(21, 'condnom', 'condprenom', 'F', '1993-01-01', 'Rue RAYHANE Rabat', 'condnom@gmail.com', 'f27f6f1c7c5cbf4e3e192e0a47b85300', '0689457820', 'ppp ppp ppp', 'fileup/abdel.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `vehicules`
--

CREATE TABLE `vehicules` (
  `id` int(11) NOT NULL,
  `coleur` varchar(25) NOT NULL,
  `nb_places` int(11) NOT NULL,
  `puissance` decimal(6,2) NOT NULL,
  `idconducteur` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `conducteurs`
--
ALTER TABLE `conducteurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idconducteur_UNIQUE` (`id`),
  ADD KEY `fk_cond_ut_idx` (`id_utilisateur`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id_conducteur`,`id_passager`),
  ADD KEY `fk_note_pass_idx` (`id_passager`);

--
-- Index pour la table `passagers`
--
ALTER TABLE `passagers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idpassager_UNIQUE` (`id`),
  ADD KEY `fk_pass_utl_idx` (`id_utilisateur`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`idreservation`),
  ADD KEY `fk_reserv_trajet_idx` (`id_trajet`),
  ADD KEY `fk_reserv_pass_idx` (`id_passager`);

--
-- Index pour la table `trajets`
--
ALTER TABLE `trajets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_trajet_cond_idx` (`id_conducteur`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vehicules`
--
ALTER TABLE `vehicules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idVehicule_UNIQUE` (`id`),
  ADD KEY `fk_vh_cond_idx` (`idconducteur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `conducteurs`
--
ALTER TABLE `conducteurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `passagers`
--
ALTER TABLE `passagers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `idreservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `trajets`
--
ALTER TABLE `trajets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `vehicules`
--
ALTER TABLE `vehicules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `conducteurs`
--
ALTER TABLE `conducteurs`
  ADD CONSTRAINT `fk_cond_ut` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `fk_note_cond` FOREIGN KEY (`id_conducteur`) REFERENCES `conducteurs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_note_pass` FOREIGN KEY (`id_passager`) REFERENCES `passagers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `fk_reserv_pass` FOREIGN KEY (`id_passager`) REFERENCES `passagers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_reserv_trajet` FOREIGN KEY (`id_trajet`) REFERENCES `trajets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `trajets`
--
ALTER TABLE `trajets`
  ADD CONSTRAINT `fk_trajet_cond` FOREIGN KEY (`id_conducteur`) REFERENCES `conducteurs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `vehicules`
--
ALTER TABLE `vehicules`
  ADD CONSTRAINT `fk_vh_cond` FOREIGN KEY (`idconducteur`) REFERENCES `conducteurs` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
