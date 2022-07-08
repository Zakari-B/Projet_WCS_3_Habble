/*
  Warnings:

  - You are about to drop the column `annonceCoordinatorId` on the `annonce_lieu` table. All the data in the column will be lost.
  - Made the column `annonceId` on table `annonce_lieu` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `annonce_lieu` DROP FOREIGN KEY `annonce_lieu_annonceId_fkey`;

-- AlterTable
ALTER TABLE `annonce_lieu` DROP COLUMN `annonceCoordinatorId`,
    MODIFY `annonceId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `annonce_lieu` ADD CONSTRAINT `annonce_lieu_annonceId_fkey` FOREIGN KEY (`annonceId`) REFERENCES `annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
