-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-09-11 19:49:06
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `stock`
--

-- --------------------------------------------------------

--
-- 資料表結構 `article`
--

CREATE TABLE `article` (
  `aid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` mediumtext NOT NULL,
  `likes` int(11) DEFAULT NULL,
  `cteatTime` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `article`
--

INSERT INTO `article` (`aid`, `title`, `content`, `likes`, `cteatTime`) VALUES
(1, 'ETF實戰｜元大美債20年 (00679B) 配息、股價、淨值、殖利率介紹！', '<p>債券價格下跌似乎總看不到盡頭，但隨著近期通貨膨脹趨緩 、升息即將邁入尾聲，許多投資人都在問：「債券的投資機會是否已經到來？」</p>\r\n            <p>2022\r\n                由於高通膨，使得聯準會為對抗通膨採取更為緊縮的貨幣政策，股市、債市都因此大跌，然而時序跨入2023年，如今聯準會逐漸釋出升息趨勢來到末端訊息，市場也預期利率即將迎來高點，當市場反映大部分的升息預期，這是否也暗示債券價格即將迎來新的變化？\r\n            </p>\r\n            <p>元大美債20年（00679B）其追蹤巴克萊20年期美國公債指數，旨在提供投資者投資美國長期公債市場的機會，而若要說到這檔ETF的特色，是其主要由美國政府公債組成，並且其表現會與這些公債的價格和收益率相關聯，投資者無需購買和持有美國公債，便能直接參與公債市場的漲跌幅，同時享受ETF的流動性和便利性。\r\n            </p>\r\n            <p>其實簡單來說，00679B可以帶給投資人直接參與美國政府債券市場的機會，00679B至少 98% 以上資產投入 AAA 級美國政府公債，而作為台股ETF之一，投資人都可以輕易買進賣出，提供方便流動性。</p>\r\n            <p>但在真正買入債券 ETF 前，投資人應該好好思考，理解「股債配置」的概念，避免對債券ETF產生錯誤認知、期待。</p>\r\n            <p>下圖來看就很明顯，在經歷2020-2023這段市場波動，回頭來看 00679b 與 0050 的價格變化會發現債券價格在2020年曇花一現後就一直都不好，更別說報酬。</p>\r\n            <p>這是因為當時全球遭受疫情所苦，經濟衰退下聯準會迅速大幅度降低利息（基準利率）救市，這也導致與利率呈反向連動的債券價格一飛沖天，但隨後在高通膨與烏俄戰爭開打下，聯準會再次展開猛烈升息對抗通膨，也導致債券價格積弱不振，但債券是否真的會繼續這樣軟弱下去呢？股編繼續說下去。\r\n            </p>\r\n            <p>首先投資人謹記，「股、債是一種投資配置」，是根據個人需求去設定的，在討論報酬率與風險時，若將兩項本就不同的商品進行比較，其實對商品來說是不公平的，債券的報酬率理論上不可能比高風險的股票市場高，但這不表示債券沒有價值與投資機會，其仍有低風險、穩定的優勢存在。\r\n            </p>', NULL, '00:00:00');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`aid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article`
--
ALTER TABLE `article`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
