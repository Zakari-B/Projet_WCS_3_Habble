/*
  Warnings:

  - Added the required column `picture` to the `freelancer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateCreated` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `freelancer` ADD COLUMN `picture` VARCHAR(1000) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `dateCreated` DATE NOT NULL;

-- CreateTable
CREATE TABLE `employer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `displayName` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(30) NULL,
    `userId` INTEGER NOT NULL,
    `dateCreated` DATE NOT NULL,
    `picture` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `employer` ADD CONSTRAINT `employer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
