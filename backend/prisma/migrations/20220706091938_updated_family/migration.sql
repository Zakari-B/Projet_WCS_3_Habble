/*
  Warnings:

  - You are about to drop the column `need` on the `family` table. All the data in the column will be lost.
  - Added the required column `complementary_info` to the `family` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `family` DROP COLUMN `need`,
    ADD COLUMN `complementary_info` TEXT NOT NULL;
