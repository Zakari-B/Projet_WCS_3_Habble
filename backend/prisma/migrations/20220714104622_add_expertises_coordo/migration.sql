-- CreateTable
CREATE TABLE `coordinator_expertises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coordinatorId` INTEGER NOT NULL,
    `expertiseId` INTEGER NOT NULL,

    INDEX `coordinator_expertises_expertiseId_fkey`(`expertiseId`),
    INDEX `coordinator_expertises_coordinatorId_fkey`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coordinator_expertises` ADD CONSTRAINT `coordinator_expertises_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coordinator_expertises` ADD CONSTRAINT `coordinator_expertises_expertiseId_fkey` FOREIGN KEY (`expertiseId`) REFERENCES `expertises`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
