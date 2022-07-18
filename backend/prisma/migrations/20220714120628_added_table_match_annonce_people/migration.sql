-- CreateTable
CREATE TABLE `annonce_match_freelancer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `annonceId` INTEGER NOT NULL,
    `freelancerId` INTEGER NULL,
    `coordinatorId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `annonce_match_freelancer` ADD CONSTRAINT `annonce_match_freelancer_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_match_freelancer` ADD CONSTRAINT `annonce_match_freelancer_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `coordinator`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `annonce_match_freelancer` ADD CONSTRAINT `annonce_match_freelancer_annonceId_fkey` FOREIGN KEY (`annonceId`) REFERENCES `annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
