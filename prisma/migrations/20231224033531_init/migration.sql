-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `birthday` DATE NOT NULL,
    `hp` VARCHAR(191) NULL,
    `status` TINYINT NOT NULL DEFAULT 1,
    `address` VARCHAR(191) NULL,
    `level` ENUM('ADMIN', 'HEAD_WH') NOT NULL DEFAULT 'ADMIN',

    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_hp_key`(`hp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isDeleted` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `unit_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medicine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `stock` SMALLINT NOT NULL DEFAULT 0,
    `buyPrice` DECIMAL(8, 2) NOT NULL,
    `sellPrice` DECIMAL(8, 2) NOT NULL,
    `unitId` INTEGER NOT NULL,
    `unitName` VARCHAR(191) NOT NULL,
    `isDeleted` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `medicine_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `hp` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `isDeleted` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `supplier_hp_key`(`hp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `invoice` VARCHAR(191) NOT NULL,
    `medicineId` INTEGER NOT NULL,
    `supplierId` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `isDeleted` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `purchase_invoice_key`(`invoice`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `invoice` VARCHAR(191) NOT NULL,
    `medicineId` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `qty` SMALLINT NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `isDeleted` TINYINT NOT NULL DEFAULT 0,

    UNIQUE INDEX `sales_invoice_key`(`invoice`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `medicine` ADD CONSTRAINT `medicine_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `unit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_medicineId_fkey` FOREIGN KEY (`medicineId`) REFERENCES `medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase` ADD CONSTRAINT `purchase_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sales` ADD CONSTRAINT `sales_medicineId_fkey` FOREIGN KEY (`medicineId`) REFERENCES `medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
