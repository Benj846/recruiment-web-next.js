/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user.Email_unique` ON `user`(`Email`);
