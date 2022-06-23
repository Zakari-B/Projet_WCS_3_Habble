-- CreateTable
CREATE TABLE `annonce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employerId` INTEGER NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `price` INTEGER NOT NULL,
    `emergency` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `annonce_services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `annonceId` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lieu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `annonce_lieu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `annonceId` INTEGER NOT NULL,
    `lieuId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `annonce` ADD CONSTRAINT `annonce_employerId_fkey` FOREIGN KEY (`employerId`) REFERENCES `employer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_services` ADD CONSTRAINT `annonce_services_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_services` ADD CONSTRAINT `annonce_services_annonceId_fkey` FOREIGN KEY (`annonceId`) REFERENCES `annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_lieu` ADD CONSTRAINT `annonce_lieu_annonceId_fkey` FOREIGN KEY (`annonceId`) REFERENCES `annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_lieu` ADD CONSTRAINT `annonce_lieu_lieuId_fkey` FOREIGN KEY (`lieuId`) REFERENCES `lieu`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
