import { Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Importance } from '@prisma/client';

@Injectable()
export class RemindersService {
  constructor (private orm:PrismaService){}


  create(createReminderDto: CreateReminderDto) {
    return this.orm.reminder.create({
      data:createReminderDto,
    })
  }

  findAll() {
    return this.orm.reminder.findMany();
  }



   
  findAllDone(){
    return this.orm.reminder.findMany({
      where:{status:true}
    })
  }

  findAllToDo(status:boolean){
    return this.orm.reminder.findMany({
      where:{status:false}
    })
  }

  
 

  findAllNormal(importance:Importance){
    return this.orm.reminder.findMany({
      where:{importance:Importance.Normal}
  })
}

  findAllImportant(importance:Importance){
    return this.orm.reminder.findMany({
      where:{importance:Importance.Important}
  })
}

  findAllUrgent(importance:Importance){
    return this.orm.reminder.findMany({
      where:{importance:Importance.Urgent}
  })
  }
  findById(id: number) {
    return this.orm.reminder.findUnique({
      where: {
        id: id, // Asegúrate de que estás pasando el id correctamente
      },
    });
  }
      findByTitle(title:string) {
        return this.orm.reminder.findMany({
          where: { title}
        })
      }     
  findByMinute(minute:number) {
    return this.orm.reminder.findMany({
      where: { minute }
    })
  }   

  findByHour(hour: number) {
    return this.orm.reminder.findMany({
      where: {hour}
    })
  }
  findByDay(day: number) {
    return this.orm.reminder.findMany({
      where: { day}
    })
  }
 
  
  findByMonth(month: number) {
    return this.orm.reminder.findMany({
      where: {month}
    })
  }



  update(id: number, updateReminderDto: UpdateReminderDto) {
    return this.orm.reminder.update({
      where: { id },
      data: updateReminderDto,
    });
  }

  remove(id: number) {
    return this.orm.reminder.delete({
      where: { id },
    });
  }
}