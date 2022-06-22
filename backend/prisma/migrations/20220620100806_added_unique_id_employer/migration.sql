/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `employer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `employer_userId_key` ON `employer`(`userId`);
