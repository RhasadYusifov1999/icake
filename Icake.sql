-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 05 Haz 2020, 00:30:13
-- Sunucu sürümü: 5.7.20
-- PHP Sürümü: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `Icake`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `call_me`
--

CREATE TABLE `call_me` (
  `name` text NOT NULL,
  `lastname` text NOT NULL,
  `number` varchar(50) NOT NULL,
  `status` int(1) NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Tablo döküm verisi `call_me`
--

INSERT INTO `call_me` (`name`, `lastname`, `number`, `status`, `_id`) VALUES
('2ei2ie90i', '90iw90diw90di', '990934903', 0, 5);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `categories`
--

CREATE TABLE `categories` (
  `title` text NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Tablo döküm verisi `categories`
--

INSERT INTO `categories` (`title`, `_id`) VALUES
('jioj', 2),
('wjwjd', 3),
('wdwdji', 4);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `coupons`
--

CREATE TABLE `coupons` (
  `percent` text NOT NULL,
  `code` varchar(500) NOT NULL,
  `status` int(2) NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `our_priorities`
--

CREATE TABLE `our_priorities` (
  `url` text NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Tablo döküm verisi `our_priorities`
--

INSERT INTO `our_priorities` (`url`, `title`, `description`, `_id`) VALUES
('our_img_1590782860795.jpg', 'Yeni Title', 'Yeni DESCRIPTION', 10);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `partners`
--

CREATE TABLE `partners` (
  `name` text NOT NULL,
  `img_url` text NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `products`
--

CREATE TABLE `products` (
  `composition` text NOT NULL,
  `kg` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `bestcake` int(2) NOT NULL,
  `producer` text NOT NULL,
  `images` text NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Tablo döküm verisi `products`
--

INSERT INTO `products` (`composition`, `kg`, `price`, `title`, `bestcake`, `producer`, `images`, `_id`) VALUES
('', 1, 0, '', 0, '', '4915537882098567->product_14480865890991500.jpg~12241901238937952->product_2130755981103035.jpg~12666779392194280->product_7689180657722080.jpg', 29),
('', 1, 0, '', 0, '', '', 30);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sliders`
--

CREATE TABLE `sliders` (
  `url` text NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Tablo döküm verisi `sliders`
--

INSERT INTO `sliders` (`url`, `_id`) VALUES
('slider_8466076535369862.jpg', 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `social_media`
--

CREATE TABLE `social_media` (
  `url` text NOT NULL,
  `img_url` text NOT NULL,
  `_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Tablo döküm verisi `social_media`
--

INSERT INTO `social_media` (`url`, `img_url`, `_id`) VALUES
('', 'default.png', 2);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `call_me`
--
ALTER TABLE `call_me`
  ADD PRIMARY KEY (`_id`);

--
-- Tablo için indeksler `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`_id`);

--
-- Tablo için indeksler `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`_id`);

--
-- Tablo için indeksler `our_priorities`
--
ALTER TABLE `our_priorities`
  ADD PRIMARY KEY (`_id`);

--
-- Tablo için indeksler `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`_id`);

--
-- Tablo için indeksler `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`_id`);

--
-- Tablo için indeksler `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`_id`);

--
-- Tablo için indeksler `social_media`
--
ALTER TABLE `social_media`
  ADD PRIMARY KEY (`_id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `call_me`
--
ALTER TABLE `call_me`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tablo için AUTO_INCREMENT değeri `categories`
--
ALTER TABLE `categories`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Tablo için AUTO_INCREMENT değeri `coupons`
--
ALTER TABLE `coupons`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `our_priorities`
--
ALTER TABLE `our_priorities`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Tablo için AUTO_INCREMENT değeri `partners`
--
ALTER TABLE `partners`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `products`
--
ALTER TABLE `products`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Tablo için AUTO_INCREMENT değeri `sliders`
--
ALTER TABLE `sliders`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `social_media`
--
ALTER TABLE `social_media`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
