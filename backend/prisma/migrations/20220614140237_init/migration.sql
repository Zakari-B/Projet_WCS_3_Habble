-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `pseudo` VARCHAR(100) NOT NULL,
    `role` VARCHAR(100) NOT NULL,
    `profileIsComplete` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `freelancer` (
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
    `dateCreated` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `freelancerId` INTEGER NOT NULL,
    `documentLink` VARCHAR(300) NOT NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `freelancer_services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `freelancerId` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `freelancer_expertises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `freelancerId` INTEGER NOT NULL,
    `expertiseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expertises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `category` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` VARCHAR(255) NOT NULL,
    `institution` VARCHAR(255) NOT NULL,
    `startMonth` VARCHAR(255) NOT NULL,
    `startYear` INTEGER NOT NULL,
    `endMonth` VARCHAR(255) NOT NULL,
    `endYear` INTEGER NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `freelancerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `experience_pro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `company` VARCHAR(100) NOT NULL,
    `startMonth` VARCHAR(100) NOT NULL,
    `startYear` INTEGER NOT NULL,
    `endMonth` VARCHAR(100) NOT NULL,
    `endYear` INTEGER NOT NULL,
    `currentJob` BOOLEAN NOT NULL DEFAULT false,
    `description` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `diplomes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `school` VARCHAR(100) NOT NULL,
    `monthDelivered` INTEGER NOT NULL,
    `yearDelivered` INTEGER NOT NULL,
    `description` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `freelancer` ADD CONSTRAINT `freelancer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `freelancer_services` ADD CONSTRAINT `freelancer_services_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `freelancer_services` ADD CONSTRAINT `freelancer_services_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `freelancer_expertises` ADD CONSTRAINT `freelancer_expertises_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `freelancer_expertises` ADD CONSTRAINT `freelancer_expertises_expertiseId_fkey` FOREIGN KEY (`expertiseId`) REFERENCES `expertises`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formations` ADD CONSTRAINT `formations_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
