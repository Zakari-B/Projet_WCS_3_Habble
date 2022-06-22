/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `freelancer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `freelancer_userId_key` ON `freelancer`(`userId`);
