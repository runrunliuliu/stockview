DROP TABLE IF EXISTS `tb_stock_day_kline`;
CREATE TABLE `tb_stock_day_kline` (
      `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
      `stock_id` int(11) NOT NULL,
      `day` int(11) NOT NULL,
      `open`  float(32),
      `high`  float(32),
      `low`  float(32),
      `close`  float(32),
      `vol`  float(32),
      PRIMARY KEY (`id`),
      UNIQUE KEY `stock_id` (`stock_id`,`day`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8   
