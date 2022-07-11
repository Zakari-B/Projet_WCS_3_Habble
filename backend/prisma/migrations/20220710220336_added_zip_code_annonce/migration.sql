/*
  Warnings:

  - Added the required column `zipCode` to the `annonce` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `annonce` ADD COLUMN `zipCode` VARCHAR(10) NOT NULL;
