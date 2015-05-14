ALTER TABLE `company_address` CHANGE `idcompany_address` `idcompany_address` INT(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `customer_address` CHANGE `idcustomer_address` `idcustomer_address` INT(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `item` ADD `brand_idbrand` INT NULL DEFAULT NULL AFTER `tob_idtob`;
-- -----------------------------------------------------
-- Table `naga`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `naga`.`brand` (
  `idbrand` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NULL,
  `origin` VARCHAR(150) NULL,
  `origin_en` VARCHAR(45) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idbrand`))
ENGINE = InnoDB;

ALTER TABLE `item_has_size` DROP `color_idcolor`;
ALTER TABLE `item_has_size` ADD `quantity` INT NULL ;
ALTER TABLE `item` ADD `color_idcolor` INT NULL AFTER `brand_idbrand`, ADD `quantity` INT NOT NULL DEFAULT '0' AFTER `color_idcolor`;


-- -----------------------------------------------------
-- Table `naga`.`item_core`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `naga`.`item_core` (
  `iditem_core` BIGINT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  `name_en` VARCHAR(500) NULL,
  `company_idcompany` INT NOT NULL,
  `tog_idtog` INT NOT NULL,
  `genre_idgenre` INT NOT NULL,
  `tob_idtob` INT NOT NULL,
  `item_desc` TEXT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `brand_idbrand` INT NOT NULL,
  `admin_idadmin` INT NOT NULL,
  PRIMARY KEY (`iditem_core`))
ENGINE = InnoDB;

ALTER TABLE `item` ADD `item_core_iditem_core` BIGINT NOT NULL AFTER `quantity`;


ALTER TABLE `item` DROP `name`, DROP `name_en`, DROP `item_desc`, DROP `company_idcompany`, DROP `tog_idtog`, DROP `genre_idgenre`, DROP `tob_idtob`, DROP `brand_idbrand`;
ALTER TABLE `stock` ADD `latit` VARCHAR(100) NOT NULL AFTER `phone`, ADD `longit` VARCHAR(100) NOT NULL AFTER `latit`;
ALTER TABLE `admin` CHANGE `idadmin` `idadmin` INT(11) NOT NULL AUTO_INCREMENT;

