/*
  Warnings:

  - You are about to drop the column `adress` on the `family` table. All the data in the column will be lost.
  - Added the required column `address` to the `family` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `family` DROP COLUMN `adress`,
    ADD COLUMN `address` VARCHAR(255) NOT NULL;
