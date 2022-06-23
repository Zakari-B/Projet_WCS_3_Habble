/*
  Warnings:

  - The `dateCreated` column on the `employer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dateCreated` column on the `freelancer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dateCreated` column on the `user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `freelancerId` to the `diplomes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freelancerId` to the `experience_pro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `diplomes` ADD COLUMN `freelancerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `employer` DROP COLUMN `dateCreated`,
    ADD COLUMN `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `experience_pro` ADD COLUMN `freelancerId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `freelancer` DROP COLUMN `dateCreated`,
    ADD COLUMN `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `user` DROP COLUMN `dateCreated`,
    ADD COLUMN `dateCreated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AddForeignKey
ALTER TABLE `experience_pro` ADD CONSTRAINT `experience_pro_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `diplomes` ADD CONSTRAINT `diplomes_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `freelancer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
