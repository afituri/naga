SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `naga` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `naga` ;

-- -----------------------------------------------------
-- Table `naga`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`admin` ;

CREATE TABLE IF NOT EXISTS `naga`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(500) NULL,
  `salt` VARCHAR(500) NULL,
  `level` TINYINT(1) NULL DEFAULT 1,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB
ROW_FORMAT = Default;


-- -----------------------------------------------------
-- Table `naga`.`customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`customer` ;

CREATE TABLE IF NOT EXISTS `naga`.`customer` (
  `idcustomer` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NULL,
  `last_name` VARCHAR(100) NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(500) NULL,
  `salt` VARCHAR(500) NULL,
  `level` TINYINT(1) NULL DEFAULT 1,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `balance` DOUBLE NULL DEFAULT 0,
  PRIMARY KEY (`idcustomer`));


-- -----------------------------------------------------
-- Table `naga`.`tob`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`tob` ;

CREATE TABLE IF NOT EXISTS `naga`.`tob` (
  `idtob` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `name_en` VARCHAR(150) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idtob`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`company`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`company` ;

CREATE TABLE IF NOT EXISTS `naga`.`company` (
  `idcompany` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NULL,
  `logo` VARCHAR(500) NULL,
  `level` TINYINT(1) NULL DEFAULT 1,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `admin_idadmin` INT NOT NULL,
  `tob_idtob` INT NOT NULL,
  PRIMARY KEY (`idcompany`, `admin_idadmin`, `tob_idtob`),
  INDEX `fk_company_admin_idx` (`admin_idadmin` ASC),
  INDEX `fk_company_tob1_idx` (`tob_idtob` ASC),
  CONSTRAINT `fk_company_admin`
    FOREIGN KEY (`admin_idadmin`)
    REFERENCES `naga`.`admin` (`idadmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_tob1`
    FOREIGN KEY (`tob_idtob`)
    REFERENCES `naga`.`tob` (`idtob`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `naga`.`company_seller`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`company_seller` ;

CREATE TABLE IF NOT EXISTS `naga`.`company_seller` (
  `idcompany_seller` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NULL,
  `last_name` VARCHAR(100) NULL,
  `email` VARCHAR(250) NULL,
  `password` VARCHAR(500) NULL,
  `salt` VARCHAR(500) NULL,
  `level` TINYINT(1) NULL DEFAULT 1,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `company_idcompany` INT NOT NULL,
  PRIMARY KEY (`idcompany_seller`, `company_idcompany`),
  INDEX `fk_company_seller_company1_idx` (`company_idcompany` ASC),
  CONSTRAINT `fk_company_seller_company1`
    FOREIGN KEY (`company_idcompany`)
    REFERENCES `naga`.`company` (`idcompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`city`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`city` ;

CREATE TABLE IF NOT EXISTS `naga`.`city` (
  `idcity` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `name_en` VARCHAR(100) NULL,
  `create_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idcity`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`area`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`area` ;

CREATE TABLE IF NOT EXISTS `naga`.`area` (
  `idarea` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `name_en` VARCHAR(100) NULL,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `city_idcity` INT NOT NULL,
  PRIMARY KEY (`idarea`, `city_idcity`),
  INDEX `fk_area_city1_idx` (`city_idcity` ASC),
  CONSTRAINT `fk_area_city1`
    FOREIGN KEY (`city_idcity`)
    REFERENCES `naga`.`city` (`idcity`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`mahalla`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`mahalla` ;

CREATE TABLE IF NOT EXISTS `naga`.`mahalla` (
  `idmahalla` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `name_en` VARCHAR(100) NULL,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `area_idarea` INT NOT NULL,
  PRIMARY KEY (`idmahalla`, `area_idarea`),
  INDEX `fk_mahalla_area1_idx` (`area_idarea` ASC),
  CONSTRAINT `fk_mahalla_area1`
    FOREIGN KEY (`area_idarea`)
    REFERENCES `naga`.`area` (`idarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`school`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`school` ;

CREATE TABLE IF NOT EXISTS `naga`.`school` (
  `idschool` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `name_en` VARCHAR(100) NULL,
  `latit` VARCHAR(100) NULL,
  `longit` VARCHAR(100) NULL,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `mahalla_idmahalla` INT NOT NULL,
  PRIMARY KEY (`idschool`, `mahalla_idmahalla`),
  INDEX `fk_school_mahalla1_idx` (`mahalla_idmahalla` ASC),
  CONSTRAINT `fk_school_mahalla1`
    FOREIGN KEY (`mahalla_idmahalla`)
    REFERENCES `naga`.`mahalla` (`idmahalla`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`customer_address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`customer_address` ;

CREATE TABLE IF NOT EXISTS `naga`.`customer_address` (
  `idcustomer_address` INT NOT NULL AUTO_INCREMENT,
  `latit` VARCHAR(100) NULL,
  `longit` VARCHAR(100) NULL,
  `default` TINYINT(1) NULL DEFAULT 1 COMMENT '1 means this is the default address for delivery\n',
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `customer_idcustomer` INT NOT NULL,
  `school_idschool` INT NOT NULL,
  `address_desc` TEXT(11) NULL,
  PRIMARY KEY (`idcustomer_address`, `customer_idcustomer`, `school_idschool`),
  INDEX `fk_customer_address_customer1_idx` (`customer_idcustomer` ASC),
  INDEX `fk_customer_address_school1_idx` (`school_idschool` ASC),
  CONSTRAINT `fk_customer_address_customer1`
    FOREIGN KEY (`customer_idcustomer`)
    REFERENCES `naga`.`customer` (`idcustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_customer_address_school1`
    FOREIGN KEY (`school_idschool`)
    REFERENCES `naga`.`school` (`idschool`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`company_address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`company_address` ;

CREATE TABLE IF NOT EXISTS `naga`.`company_address` (
  `idcompany_address` INT NOT NULL AUTO_INCREMENT,
  `latit` VARCHAR(100) NULL,
  `longit` VARCHAR(100) NULL,
  `default` TINYINT(1) NULL DEFAULT 1 COMMENT '1 means this is the default address for delivery\n',
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `company_idcompany` INT NOT NULL,
  `school_idschool` INT NOT NULL,
  `address_desc` TEXT(11) NULL,
  PRIMARY KEY (`idcompany_address`, `company_idcompany`, `school_idschool`),
  INDEX `fk_company_address_company1_idx` (`company_idcompany` ASC),
  INDEX `fk_company_address_school1_idx` (`school_idschool` ASC),
  CONSTRAINT `fk_company_address_company1`
    FOREIGN KEY (`company_idcompany`)
    REFERENCES `naga`.`company` (`idcompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_address_school1`
    FOREIGN KEY (`school_idschool`)
    REFERENCES `naga`.`school` (`idschool`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`genre`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`genre` ;

CREATE TABLE IF NOT EXISTS `naga`.`genre` (
  `idgenre` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `name_en` VARCHAR(150) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `tob_idtob` INT NOT NULL,
  PRIMARY KEY (`idgenre`, `tob_idtob`),
  INDEX `fk_genre_tob1_idx` (`tob_idtob` ASC),
  CONSTRAINT `fk_genre_tob1`
    FOREIGN KEY (`tob_idtob`)
    REFERENCES `naga`.`tob` (`idtob`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`tog`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`tog` ;

CREATE TABLE IF NOT EXISTS `naga`.`tog` (
  `idtog` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `name_en` VARCHAR(150) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `genre_idgenre` INT NOT NULL,
  `genre_tob_idtob` INT NOT NULL,
  PRIMARY KEY (`idtog`, `genre_idgenre`, `genre_tob_idtob`),
  INDEX `fk_tog_genre1_idx` (`genre_idgenre` ASC, `genre_tob_idtob` ASC),
  CONSTRAINT `fk_tog_genre1`
    FOREIGN KEY (`genre_idgenre` , `genre_tob_idtob`)
    REFERENCES `naga`.`genre` (`idgenre` , `tob_idtob`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`item` ;

CREATE TABLE IF NOT EXISTS `naga`.`item` (
  `iditem` BIGINT(11) NOT NULL,
  `name` VARCHAR(500) NOT NULL,
  `name_en` VARCHAR(500) NULL,
  `price` FLOAT NULL,
  `discount` FLOAT NULL,
  `discount_exp` DATETIME NULL,
  `discount_flag` TINYINT(1) NULL DEFAULT 0,
  `company_seller_idcompany_seller` INT NOT NULL,
  `company_idcompany` INT NOT NULL,
  `tog_idtog` INT NOT NULL,
  `genre_idgenre` INT NOT NULL,
  `tob_idtob` INT NOT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`iditem`, `company_seller_idcompany_seller`, `company_idcompany`, `tog_idtog`, `genre_idgenre`, `tob_idtob`),
  INDEX `fk_item_company_seller1_idx` (`company_seller_idcompany_seller` ASC, `company_idcompany` ASC),
  INDEX `fk_item_tog1_idx` (`tog_idtog` ASC, `genre_idgenre` ASC, `tob_idtob` ASC),
  CONSTRAINT `fk_item_company_seller1`
    FOREIGN KEY (`company_seller_idcompany_seller` , `company_idcompany`)
    REFERENCES `naga`.`company_seller` (`idcompany_seller` , `company_idcompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_tog1`
    FOREIGN KEY (`tog_idtog` , `genre_idgenre` , `tob_idtob`)
    REFERENCES `naga`.`tog` (`idtog` , `genre_idgenre` , `genre_tob_idtob`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`measure`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`measure` ;

CREATE TABLE IF NOT EXISTS `naga`.`measure` (
  `idmeasure` INT NOT NULL AUTO_INCREMENT,
  `name_en` VARCHAR(100) NULL,
  `name` VARCHAR(100) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idmeasure`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`size`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`size` ;

CREATE TABLE IF NOT EXISTS `naga`.`size` (
  `idsize` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `name_en` VARCHAR(100) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `measure_idmeasure` INT NOT NULL,
  PRIMARY KEY (`idsize`, `measure_idmeasure`),
  INDEX `fk_size_measure1_idx` (`measure_idmeasure` ASC),
  CONSTRAINT `fk_size_measure1`
    FOREIGN KEY (`measure_idmeasure`)
    REFERENCES `naga`.`measure` (`idmeasure`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`color`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`color` ;

CREATE TABLE IF NOT EXISTS `naga`.`color` (
  `idcolor` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `name_en` VARCHAR(100) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idcolor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`item_has_size`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`item_has_size` ;

CREATE TABLE IF NOT EXISTS `naga`.`item_has_size` (
  `item_iditem` BIGINT(11) NOT NULL,
  `size_idsize` INT NOT NULL,
  `measure_idmeasure` INT NOT NULL,
  `color_idcolor` INT NOT NULL,
  PRIMARY KEY (`item_iditem`, `size_idsize`, `measure_idmeasure`, `color_idcolor`),
  INDEX `fk_item_has_size_size1_idx` (`size_idsize` ASC, `measure_idmeasure` ASC),
  INDEX `fk_item_has_size_item1_idx` (`item_iditem` ASC),
  INDEX `fk_item_has_size_color1_idx` (`color_idcolor` ASC),
  CONSTRAINT `fk_item_has_size_item1`
    FOREIGN KEY (`item_iditem`)
    REFERENCES `naga`.`item` (`iditem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_has_size_size1`
    FOREIGN KEY (`size_idsize` , `measure_idmeasure`)
    REFERENCES `naga`.`size` (`idsize` , `measure_idmeasure`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_has_size_color1`
    FOREIGN KEY (`color_idcolor`)
    REFERENCES `naga`.`color` (`idcolor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`prepaid`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`prepaid` ;

CREATE TABLE IF NOT EXISTS `naga`.`prepaid` (
  `idprepaid` BIGINT(8) NOT NULL AUTO_INCREMENT,
  `prepaid` BIGINT(8) NOT NULL,
  `perpaid_hash` VARCHAR(500) NOT NULL,
  `serial_no` BIGINT(8) NOT NULL,
  `salt` VARCHAR(500) NOT NULL,
  `amount` INT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idprepaid`),
  UNIQUE INDEX `idprepaid_UNIQUE` (`idprepaid` ASC),
  UNIQUE INDEX `prepaid_no_UNIQUE` (`prepaid` ASC),
  UNIQUE INDEX `serial_no_UNIQUE` (`serial_no` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`prepaid_live`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`prepaid_live` ;

CREATE TABLE IF NOT EXISTS `naga`.`prepaid_live` (
  `idprepaid` BIGINT(8) NOT NULL AUTO_INCREMENT,
  `perpaid_hash` VARCHAR(500) NOT NULL,
  `serial_no` BIGINT(8) NOT NULL,
  `salt` VARCHAR(500) NOT NULL,
  `amount` INT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idprepaid`),
  UNIQUE INDEX `idprepaid_UNIQUE` (`idprepaid` ASC),
  UNIQUE INDEX `serial_no_UNIQUE` (`serial_no` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`balance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`balance` ;

CREATE TABLE IF NOT EXISTS `naga`.`balance` (
  `idbalance` INT NOT NULL AUTO_INCREMENT,
  `prepaid_live_idprepaid` BIGINT(8) NOT NULL,
  `customer_idcustomer` INT NOT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idbalance`, `prepaid_live_idprepaid`, `customer_idcustomer`),
  INDEX `fk_balance_prepaid_live1_idx` (`prepaid_live_idprepaid` ASC),
  INDEX `fk_balance_customer1_idx` (`customer_idcustomer` ASC),
  CONSTRAINT `fk_balance_prepaid_live1`
    FOREIGN KEY (`prepaid_live_idprepaid`)
    REFERENCES `naga`.`prepaid_live` (`idprepaid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_balance_customer1`
    FOREIGN KEY (`customer_idcustomer`)
    REFERENCES `naga`.`customer` (`idcustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`cart` ;

CREATE TABLE IF NOT EXISTS `naga`.`cart` (
  `idcart` BIGINT(8) NOT NULL AUTO_INCREMENT,
  `customer_idcustomer` INT NOT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idcart`, `customer_idcustomer`),
  INDEX `fk_cart_customer1_idx` (`customer_idcustomer` ASC),
  CONSTRAINT `fk_cart_customer1`
    FOREIGN KEY (`customer_idcustomer`)
    REFERENCES `naga`.`customer` (`idcustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`cart_has_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`cart_has_item` ;

CREATE TABLE IF NOT EXISTS `naga`.`cart_has_item` (
  `cart_idcart` BIGINT(8) NOT NULL,
  `customer_idcustomer` INT NOT NULL,
  `item_iditem` BIGINT(11) NOT NULL,
  `price` DOUBLE NULL,
  `item_name` VARCHAR(500) NULL,
  `company_idcompany` INT NOT NULL,
  `quantity` INT NULL,
  PRIMARY KEY (`cart_idcart`, `customer_idcustomer`, `item_iditem`, `company_idcompany`),
  INDEX `fk_cart_has_item_item1_idx` (`item_iditem` ASC, `company_idcompany` ASC),
  INDEX `fk_cart_has_item_cart1_idx` (`cart_idcart` ASC, `customer_idcustomer` ASC),
  CONSTRAINT `fk_cart_has_item_cart1`
    FOREIGN KEY (`cart_idcart` , `customer_idcustomer`)
    REFERENCES `naga`.`cart` (`idcart` , `customer_idcustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cart_has_item_item1`
    FOREIGN KEY (`item_iditem` , `company_idcompany`)
    REFERENCES `naga`.`item` (`iditem` , `company_idcompany`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`order` ;

CREATE TABLE IF NOT EXISTS `naga`.`order` (
  `idorder` BIGINT(8) NOT NULL AUTO_INCREMENT,
  `cart_idcart` BIGINT(8) NOT NULL,
  `cart_customer_idcustomer` INT NOT NULL,
  `customer_address_idcustomer_address` INT NOT NULL,
  `customer_address_school_idschool` INT NOT NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  PRIMARY KEY (`idorder`, `cart_idcart`, `cart_customer_idcustomer`, `customer_address_idcustomer_address`, `customer_address_school_idschool`),
  INDEX `fk_order_cart2_idx` (`cart_idcart` ASC, `cart_customer_idcustomer` ASC),
  INDEX `fk_order_customer_address2_idx` (`customer_address_idcustomer_address` ASC, `customer_address_school_idschool` ASC),
  CONSTRAINT `fk_order_cart2`
    FOREIGN KEY (`cart_idcart` , `cart_customer_idcustomer`)
    REFERENCES `naga`.`cart` (`idcart` , `customer_idcustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_customer_address2`
    FOREIGN KEY (`customer_address_idcustomer_address` , `customer_address_school_idschool`)
    REFERENCES `naga`.`customer_address` (`idcustomer_address` , `school_idschool`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `naga`.`photos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `naga`.`photos` ;

CREATE TABLE IF NOT EXISTS `naga`.`photos` (
  `idphotos` BIGINT(8) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NULL,
  `path` VARCHAR(500) NULL,
  `status` TINYINT(1) NULL DEFAULT 1,
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` DATETIME NULL,
  `default` TINYINT(1) NULL DEFAULT 0,
  `item_iditem` BIGINT(11) NOT NULL,
  PRIMARY KEY (`idphotos`, `item_iditem`),
  INDEX `fk_photos_item1_idx` (`item_iditem` ASC),
  CONSTRAINT `fk_photos_item1`
    FOREIGN KEY (`item_iditem`)
    REFERENCES `naga`.`item` (`iditem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
