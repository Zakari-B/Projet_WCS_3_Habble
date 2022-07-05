-- AlterTable
ALTER TABLE `annonce` ADD COLUMN `status` VARCHAR(100) NOT NULL DEFAULT 'En cours';

-- AlterTable
ALTER TABLE `annonce_lieu` ADD COLUMN `annonceCoordinatorId` INTEGER NULL,
    MODIFY `annonceId` INTEGER NULL;

-- AlterTable
ALTER TABLE `annonce_services` ADD COLUMN `annonceCoordinatorId` INTEGER NULL,
    MODIFY `annonceId` INTEGER NULL;

-- CreateTable
CREATE TABLE `annonceCoordinator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coordinatorId` INTEGER NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `price` INTEGER NOT NULL,
    `emergency` BOOLEAN NOT NULL DEFAULT false,
    `status` VARCHAR(100) NOT NULL DEFAULT 'En cours',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `annonce_services` ADD CONSTRAINT `annonce_services_annonceCoordinatorId_fkey` FOREIGN KEY (`annonceCoordinatorId`) REFERENCES `annonceCoordinator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_lieu` ADD CONSTRAINT `annonce_lieu_annonceCoordinatorId_fkey` FOREIGN KEY (`annonceCoordinatorId`) REFERENCES `annonceCoordinator`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonceCoordinator` ADD CONSTRAINT `annonceCoordinator_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
