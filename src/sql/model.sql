SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema mcas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mcas` ;
USE `mcas` ;


-- -----------------------------------------------------
-- Table `mcas`.`Service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Service` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(100) NULL,
  `uri` VARCHAR(45) NULL,
  `Service_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Service_Service1_idx` (`Service_id` ASC) VISIBLE,
  CONSTRAINT `fk_Service_Service1`
    FOREIGN KEY (`Service_id`)
    REFERENCES `mcas`.`Service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`DataStream`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`DataStream` (
  `id` INT NOT NULL,
  `entryPoint` INT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(100) NULL,
  `Service_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_DataStream_Service1_idx` (`Service_id` ASC) VISIBLE,
  CONSTRAINT `fk_DataStream_Service1`
    FOREIGN KEY (`Service_id`)
    REFERENCES `mcas`.`Service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Source`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Source` (
  `id` INT NOT NULL,
  `uri` VARCHAR(255) NULL,
  `api_key` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`BeatType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`BeatType` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `repo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Beat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Beat` (
  `id` INT NOT NULL,
  `uri` VARCHAR(255) NULL,
  `Source_id` INT NOT NULL,
  `BeatType_id` INT NOT NULL,
  `DataStream_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Beat_Source1_idx` (`Source_id` ASC) VISIBLE,
  INDEX `fk_Beat_BeatType1_idx` (`BeatType_id` ASC) VISIBLE,
  INDEX `fk_Beat_DataStream1_idx` (`DataStream_id` ASC) VISIBLE,
  CONSTRAINT `fk_Beat_Source1`
    FOREIGN KEY (`Source_id`)
    REFERENCES `mcas`.`Source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Beat_BeatType1`
    FOREIGN KEY (`BeatType_id`)
    REFERENCES `mcas`.`BeatType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Beat_DataStream1`
    FOREIGN KEY (`DataStream_id`)
    REFERENCES `mcas`.`DataStream` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Account` (
  `id` INT NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Report`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Report` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(100) NULL,
  `DataStream_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Report_DataStream1_idx` (`DataStream_id` ASC) VISIBLE,
  CONSTRAINT `fk_Report_DataStream1`
    FOREIGN KEY (`DataStream_id`)
    REFERENCES `mcas`.`DataStream` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Access` (
  `id` INT NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `Account_id` INT NOT NULL,
  `Report_id` INT NOT NULL,
  `Beat_id` INT NOT NULL,
  PRIMARY KEY (`id`, `role`),
  INDEX `fk_Access_Account_idx` (`Account_id` ASC) VISIBLE,
  INDEX `fk_Access_Report1_idx` (`Report_id` ASC) VISIBLE,
  INDEX `fk_Access_Beat1_idx` (`Beat_id` ASC) VISIBLE,
  CONSTRAINT `fk_Access_Account`
    FOREIGN KEY (`Account_id`)
    REFERENCES `mcas`.`Account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Report1`
    FOREIGN KEY (`Report_id`)
    REFERENCES `mcas`.`Report` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Beat1`
    FOREIGN KEY (`Beat_id`)
    REFERENCES `mcas`.`Beat` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;