-- DropIndex
DROP INDEX `annonce_lieu_annonceCoordinatorId_fkey` ON `annonce_lieu`;

-- DropIndex
DROP INDEX `annonce_services_annonceCoordinatorId_fkey` ON `annonce_services`;

-- AlterTable
ALTER TABLE `documents` MODIFY `freelancerId` INTEGER NULL,
    MODIFY `coordinatorId` INTEGER NULL;
