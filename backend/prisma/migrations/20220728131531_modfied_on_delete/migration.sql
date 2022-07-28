-- DropForeignKey
ALTER TABLE `family` DROP FOREIGN KEY `family_coordinatorId_fkey`;

-- AddForeignKey
ALTER TABLE `family` ADD CONSTRAINT `family_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
