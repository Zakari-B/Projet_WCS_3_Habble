/*
  Warnings:

  - You are about to drop the column `phone` on the `employer` table. All the data in the column will be lost.
  - Added the required column `description` to the `employer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employer` DROP COLUMN `phone`,
    ADD COLUMN `available` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `description` VARCHAR(1000) NOT NULL;
