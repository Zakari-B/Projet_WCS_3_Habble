/*
  Warnings:

  - You are about to drop the `diplomes_coordinator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `experience_pro_coordinator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `formations_coordinator` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `diplomes_coordinator` DROP FOREIGN KEY `diplomes_coordinator_coordinatorId_fkey`;

-- DropForeignKey
ALTER TABLE `experience_pro_coordinator` DROP FOREIGN KEY `experience_pro_coordinator_coordinatorId_fkey`;

-- DropForeignKey
ALTER TABLE `formations_coordinator` DROP FOREIGN KEY `formations_coordinator_coordinatorId_fkey`;

-- AlterTable
ALTER TABLE `diplomes` ADD COLUMN `coordinatorId` INTEGER NULL,
    MODIFY `freelancerId` INTEGER NULL;

-- DropTable
DROP TABLE `diplomes_coordinator`;

-- DropTable
DROP TABLE `experience_pro_coordinator`;

-- DropTable
DROP TABLE `formations_coordinator`;

-- CreateIndex
CREATE INDEX `diplomes_coordinatorId_fkey` ON `diplomes`(`coordinatorId`);

-- AddForeignKey
ALTER TABLE `diplomes` ADD CONSTRAINT `diplomes_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
