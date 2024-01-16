/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `purchase` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchase` DROP COLUMN `isDeleted`,
    ADD COLUMN `quantity` INTEGER NOT NULL;
