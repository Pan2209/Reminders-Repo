import { Module } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { RemindersController } from './reminders.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RemindersController],
  providers: [RemindersService,PrismaService],
  imports:[PrismaModule]
})
export class RemindersModule {}
