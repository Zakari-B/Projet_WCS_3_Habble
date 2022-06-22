-- AlterTable
ALTER TABLE `diplomes` MODIFY `description` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `formations` ADD COLUMN `dateCreated` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `description` VARCHAR(500) NULL;
