/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `expertises` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `lieu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `expertises_name_key` ON `expertises`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `lieu_name_key` ON `lieu`(`name`);
