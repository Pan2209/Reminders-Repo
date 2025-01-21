-- CreateEnum
CREATE TYPE "Importance" AS ENUM ('Normal', 'Important', 'Urgent');

-- CreateTable
CREATE TABLE "Reminder" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "reminder" TEXT NOT NULL,
    "note" TEXT,
    "minute" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "importance" "Importance" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reminder_title_key" ON "Reminder"("title");
