/*
  Warnings:

  - Added the required column `status` to the `annonce` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `annonce` ADD COLUMN `status` VARCHAR(100) NOT NULL;
