-- CreateTable
CREATE TABLE `coordinator_services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coordinatorId` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,

    INDEX `coordinator_services_serviceId_fkey`(`serviceId`),
    INDEX `coordinator_services_coordinatorId_fkey`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coordinator_services` ADD CONSTRAINT `coordinator_services_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `coordinator_services` ADD CONSTRAINT `coordinator_services_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
