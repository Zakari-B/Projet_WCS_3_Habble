-- CreateTable
CREATE TABLE `formations_coordinator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` VARCHAR(255) NOT NULL,
    `institution` VARCHAR(255) NOT NULL,
    `startMonth` VARCHAR(255) NOT NULL,
    `startYear` INTEGER NOT NULL,
    `endMonth` VARCHAR(255) NOT NULL,
    `endYear` INTEGER NOT NULL,
    `description` VARCHAR(500) NULL,
    `coordinatorId` INTEGER NOT NULL,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `formations_coordinator_coordinatorId_fkey`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experience_pro_coordinator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `company` VARCHAR(100) NOT NULL,
    `startMonth` VARCHAR(100) NOT NULL,
    `startYear` INTEGER NOT NULL,
    `endMonth` VARCHAR(100) NOT NULL,
    `endYear` INTEGER NOT NULL,
    `currentJob` BOOLEAN NOT NULL DEFAULT false,
    `description` VARCHAR(500) NULL,
    `coordinatorId` INTEGER NOT NULL,
    `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `experience_pro_coordinator_coordinatorId_fkey`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `formations_coordinator` ADD CONSTRAINT `formations_coordinator_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `experience_pro_coordinator` ADD CONSTRAINT `experience_pro_coordinator_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `diplomes_coordinator` RENAME INDEX `diplomes_coordinatorId_fkey` TO `diplomes_coordinator_coordinatorId_fkey`;
