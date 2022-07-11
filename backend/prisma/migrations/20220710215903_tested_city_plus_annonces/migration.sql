-- CreateTable
CREATE TABLE `city` (
    `ville_id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `ville_departement` VARCHAR(3) NULL,
    `ville_slug` VARCHAR(255) NULL,
    `ville_nom` VARCHAR(45) NULL,
    `ville_nom_simple` VARCHAR(45) NULL,
    `ville_nom_reel` VARCHAR(45) NULL,
    `ville_code_postal` VARCHAR(255) NULL,
    `ville_code_commune` VARCHAR(10) NOT NULL,
    `ville_longitude_deg` FLOAT NULL,
    `ville_latitude_deg` FLOAT NULL,
    `city_geo_point` point NULL,

    UNIQUE INDEX `ville_slug`(`ville_slug`),
    UNIQUE INDEX `ville_code_commune_2`(`ville_code_commune`),
    INDEX `ville_code_commune`(`ville_code_commune`),
    INDEX `ville_code_postal`(`ville_code_postal`),
    INDEX `ville_departement`(`ville_departement`),
    INDEX `ville_longitude_latitude_deg`(`ville_longitude_deg`, `ville_latitude_deg`),
    INDEX `ville_nom`(`ville_nom`),
    INDEX `ville_nom_reel`(`ville_nom_reel`),
    INDEX `ville_nom_simple`(`ville_nom_simple`),
    PRIMARY KEY (`ville_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
