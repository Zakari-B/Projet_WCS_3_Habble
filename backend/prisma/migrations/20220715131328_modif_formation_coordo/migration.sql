/*
  Warnings:

  - You are about to drop the `formations_formations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `formations_formations` DROP FOREIGN KEY `formations_formations_coordinatorId_fkey`;

-- DropTable
DROP TABLE `formations_formations`;

-- CreateTable
CREATE TABLE `formations_coordinator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` VARCHAR(255) NOT NULL,
    `institution` VARCHAR(255) NOT NULL,
    `startMonth` VARCHAR(255) NOT NULL,
    `startYear` INTEGER NOT NULL,
    `endMonth` VARCHAR(255) NOT NULL,
    `endYear` INTEGER NOT NULL,
    `description` VARCHAR(500) NULL,
    `coordinatorId` INTEGER NOT NULL,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `formations_coordinatorId_fkey`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `formations_coordinator` ADD CONSTRAINT `formations_coordinator_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
