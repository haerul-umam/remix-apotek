/*
  Warnings:

  - Added the required column `medicineName` to the `purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplierName` to the `purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `medicineName` VARCHAR(191) NOT NULL,
    ADD COLUMN `supplierName` VARCHAR(191) NOT NULL;
