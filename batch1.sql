ALTER TABLE `customer` ADD `mobile` VARCHAR(30) NULL , ADD `phone` VARCHAR(30) NULL ;
ALTER TABLE `city` ADD `status` TINYINT(1) NULL DEFAULT '1' AFTER `name_en`;