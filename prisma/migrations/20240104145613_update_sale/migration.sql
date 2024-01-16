/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `qty` on the `sales` table. All the data in the column will be lost.
  - Added the required column `medicineName` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sales` DROP COLUMN `isDeleted`,
    DROP COLUMN `qty`,
    ADD COLUMN `medicineName` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` SMALLINT NOT NULL;
