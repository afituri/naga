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

ALTER TABLE `item` ADD `item_desc` TEXT NOT NULL AFTER `discount_flag`;
ALTER TABLE `item_has_size` DROP `color_idcolor`;
ALTER TABLE `item_has_size` ADD `quantity` INT NULL ;
ALTER TABLE `item` ADD `color_idcolor` INT NULL AFTER `brand_idbrand`, ADD `quantity` INT NOT NULL DEFAULT '0' AFTER `color_idcolor`;