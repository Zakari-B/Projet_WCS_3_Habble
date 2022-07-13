-- AlterTable
ALTER TABLE `documents` ADD COLUMN `familyId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_familyId_fkey` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
