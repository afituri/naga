ALTER TABLE `area` ADD `status` TINYINT(1) NOT NULL DEFAULT '1' AFTER `name_en`;
ALTER TABLE `prepaid_live` ADD `customer_idcustomer` INT NULL DEFAULT NULL AFTER `amount`;
ALTER TABLE `mahalla` ADD `status` TINYINT(1) NULL DEFAULT '1' AFTER `name_en`;



DROP TABLE IF EXISTS `naga`.`vendor_has_prepaid`;
-- -----------------------------------------------------
-- Table `naga`.`vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `naga`.`vendor` (
  `idvendor` INT NOT NULL,
  `name` VARCHAR(500) NULL,
  `phone` VARCHAR(45) NULL,
  `has_id` BIGINT(8) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idvendor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`vendor_has_prepaid`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `naga`.`vendor_has_prepaid` (
  `idvendor_has_prepaid` INT NOT NULL,
  `serial_from` BIGINT(8) NULL,
  `serial_to` BIGINT(8) NULL,
  `quantity` INT NULL,
  `amount` INT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `vendor_idvendor` INT NOT NULL,
  PRIMARY KEY (`idvendor_has_prepaid`, `vendor_idvendor`),
  INDEX `fk_vendor_has_prepaid_vendor1_idx` (`vendor_idvendor` ASC),
  CONSTRAINT `fk_vendor_has_prepaid_vendor1`
    FOREIGN KEY (`vendor_idvendor`)
    REFERENCES `naga`.`vendor` (`idvendor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;