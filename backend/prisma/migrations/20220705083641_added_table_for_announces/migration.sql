-- CreateTable
CREATE TABLE `annonce_offers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `annonceId` INTEGER NOT NULL,
    `freelancerId` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `availableIn` VARCHAR(500) NOT NULL,
    `status` VARCHAR(500) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `annonce_offers` ADD CONSTRAINT `annonce_offers_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_offers` ADD CONSTRAINT `annonce_offers_annonceId_fkey` FOREIGN KEY (`annonceId`) REFERENCES `annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
