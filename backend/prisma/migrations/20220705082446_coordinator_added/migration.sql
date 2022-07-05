/*
  Warnings:

  - Added the required column `coordinatorId` to the `documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `documents` ADD COLUMN `coordinatorId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `coordinator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `displayName` VARCHAR(100) NOT NULL,
    `activityDescription` VARCHAR(255) NOT NULL,
    `userId` INTEGER NOT NULL,
    `zipCode` VARCHAR(10) NOT NULL,
    `phone` VARCHAR(30) NULL,
    `experienceYear` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `acceptEmails` BOOLEAN NOT NULL DEFAULT false,
    `siret` INTEGER NULL,
    `available` BOOLEAN NOT NULL DEFAULT false,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `picture` VARCHAR(1000) NULL,

    UNIQUE INDEX `coordinator_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coordinator` ADD CONSTRAINT `coordinator_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
