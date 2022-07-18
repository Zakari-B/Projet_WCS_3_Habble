/*
  Warnings:

  - You are about to drop the column `coordinatorId` on the `diplomes` table. All the data in the column will be lost.
  - Made the column `freelancerId` on table `diplomes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `diplomes` DROP FOREIGN KEY `diplomes_coordinatorId_fkey`;

-- DropForeignKey
ALTER TABLE `diplomes` DROP FOREIGN KEY `diplomes_freelancerId_fkey`;

-- AlterTable
ALTER TABLE `diplomes` DROP COLUMN `coordinatorId`,
    MODIFY `freelancerId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `diplomes_coordinator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `school` VARCHAR(100) NOT NULL,
    `monthDelivered` VARCHAR(100) NOT NULL,
    `yearDelivered` INTEGER NOT NULL,
    `description` VARCHAR(500) NULL,
    `coordinatorId` INTEGER NOT NULL,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `diplomes_coordinatorId_fkey`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `diplomes` ADD CONSTRAINT `diplomes_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `diplomes_coordinator` ADD CONSTRAINT `diplomes_coordinator_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
