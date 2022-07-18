-- AlterTable
ALTER TABLE `diplomes` ADD COLUMN `coordinatorId` INTEGER NULL,
    MODIFY `freelancerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `experience_pro` ADD COLUMN `coordinatorId` INTEGER NULL,
    MODIFY `freelancerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `formations` ADD COLUMN `coordinatorId` INTEGER NULL,
    MODIFY `freelancerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `formations` ADD CONSTRAINT `formations_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `experience_pro` ADD CONSTRAINT `experience_pro_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `diplomes` ADD CONSTRAINT `diplomes_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
