/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `token_userId_key` ON `token`(`userId`);
