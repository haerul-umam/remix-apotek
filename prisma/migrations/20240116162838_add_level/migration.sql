-- AlterTable
ALTER TABLE `user` MODIFY `level` ENUM('ADMIN', 'HEAD_WH', 'SUPER') NOT NULL DEFAULT 'ADMIN';
