/*
  Warnings:

  - You are about to drop the `annoncecoordinator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `annonce_lieu` DROP FOREIGN KEY `annonce_lieu_annonceCoordinatorId_fkey`;

-- DropForeignKey
ALTER TABLE `annonce_services` DROP FOREIGN KEY `annonce_services_annonceCoordinatorId_fkey`;

-- DropForeignKey
ALTER TABLE `annoncecoordinator` DROP FOREIGN KEY `annonceCoordinator_coordinatorId_fkey`;

-- AlterTable
ALTER TABLE `annonce` ADD COLUMN `coordinatorId` INTEGER NULL,
    ADD COLUMN `familyId` INTEGER NULL,
    MODIFY `employerId` INTEGER NULL;

-- DropTable
DROP TABLE `annoncecoordinator`;

-- CreateTable
CREATE TABLE `family` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `legalGuardian` VARCHAR(100) NOT NULL,
    `adress` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `need` VARCHAR(1000) NOT NULL,
    `disabilityType` VARCHAR(100) NOT NULL,
    `coordinatorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `annonce` ADD CONSTRAINT `annonce_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce` ADD CONSTRAINT `annonce_familyId_fkey` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `family` ADD CONSTRAINT `family_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
