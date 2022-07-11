/*
  Warnings:

  - You are about to drop the column `lieuId` on the `annonce_lieu` table. All the data in the column will be lost.
  - Added the required column `locationId` to the `annonce_lieu` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `annonce_lieu` DROP FOREIGN KEY `annonce_lieu_lieuId_fkey`;

-- AlterTable
ALTER TABLE `annonce_lieu` DROP COLUMN `lieuId`,
    ADD COLUMN `locationId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `annonce_lieu` ADD CONSTRAINT `annonce_lieu_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `lieu`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
