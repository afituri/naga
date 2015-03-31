
-- -----------------------------------------------------
-- Table `naga`.`vendor_has_prepaid`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `naga`.`vendor_has_prepaid` (
  `idvendor_has_prepaid` INT NOT NULL,
  `name` VARCHAR(500) NULL,
  `phone` VARCHAR(45) NULL,
  `has_id` BIGINT(8) NULL,
  `serial_from` BIGINT(8) NULL,
  `serial_to` BIGINT(8) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idvendor_has_prepaid`))
ENGINE = InnoDB;