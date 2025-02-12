/*
  Warnings:

  - You are about to drop the column `objective` on the `Objectives` table. All the data in the column will be lost.
  - Added the required column `objectiveTitle` to the `Objectives` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Objectives" DROP COLUMN "objective",
ADD COLUMN     "objectiveTitle" TEXT NOT NULL;
