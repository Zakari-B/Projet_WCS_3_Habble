-- AlterTable
ALTER TABLE `annonce` ADD COLUMN `coordinatorId` INTEGER NULL,
    ADD COLUMN `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `familyId` INTEGER NULL,
    ADD COLUMN `status` VARCHAR(100) NOT NULL DEFAULT 'En cours',
    MODIFY `employerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `annonce_lieu` ADD COLUMN `annonceCoordinatorId` INTEGER NULL,
    MODIFY `annonceId` INTEGER NULL;

-- AlterTable
ALTER TABLE `annonce_services` ADD COLUMN `annonceCoordinatorId` INTEGER NULL,
    MODIFY `annonceId` INTEGER NULL;

-- AlterTable
ALTER TABLE `documents` ADD COLUMN `coordinatorId` INTEGER NULL,
    MODIFY `freelancerId` INTEGER NULL;

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

-- CreateTable
CREATE TABLE `annonce_offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `annonceId` INTEGER NOT NULL,
    `freelancerId` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `availableIn` VARCHAR(500) NOT NULL,
    `status` VARCHAR(500) NOT NULL DEFAULT 'En attente',
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `family` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `legalGuardian` VARCHAR(100) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `disabilityType` VARCHAR(100) NOT NULL,
    `complementary_info` TEXT NOT NULL,
    `coordinatorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `coordinator` ADD CONSTRAINT `coordinator_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce` ADD CONSTRAINT `annonce_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce` ADD CONSTRAINT `annonce_familyId_fkey` FOREIGN KEY (`familyId`) REFERENCES `family`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_offers` ADD CONSTRAINT `annonce_offers_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_offers` ADD CONSTRAINT `annonce_offers_annonceId_fkey` FOREIGN KEY (`annonceId`) REFERENCES `annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `family` ADD CONSTRAINT `family_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
