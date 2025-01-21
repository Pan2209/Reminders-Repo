import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Importance } from '@prisma/client';

@Controller('reminders')
export class RemindersController {
  constructor(private remindersService: RemindersService) {}

  @Post()
  create(@Body() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @Get()
  findAll() {
    return this.remindersService.findAll();
  }

  @Get(':id') // Cambiado a ':id' para que sea un parámetro de ruta
  findById(@Param('id') id: string) { // Recibe el id como string
    const idNumber = parseInt(id, 10); // Convierte el id a número
    return this.remindersService.findById(idNumber); // Pasa el id como número
  }
  @Get('title')
  findByTitle(@Query('title') title: string) { // Cambiado a @Query para obtener el título de la consulta
    return this.remindersService.findByTitle(title);
  }

  @Get('done') // Endpoint para obtener recordatorios completados
  findAllDone() {
    return this.remindersService.findAllDone(); // Llama al servicio para obtener recordatorios completados
  }

  @Get('todo')
  findAllToDo(@Query('status') status: boolean) {
    const isDone = status === false; // Convertir a booleano
    return this.remindersService.findAllToDo(isDone); // Cambiado a findAllToDo
  }

  @Get('minute/:minute') // Cambiado a ':minute' para que sea un parámetro de ruta
  findByMinute(@Param('minute') minute: number) {
    return this.remindersService.findByMinute(minute);
  }

  @Get('hour') // Este método está bien
  findByHour(@Query('hour') hour: number) {
    return this.remindersService.findByHour(hour);
  }

  @Get(':/day') // Cambiado a ':day' para que sea un parámetro de ruta
  findByDay(@Query('day') day: number) {
    return this.remindersService.findByDay(day);
  }

  @Get('month') // Cambiado a ':month' para que sea un parámetro de ruta
  findByMonth(@Query('month') month: number) {
    return this.remindersService.findByMonth(month);
  }

  @Get('importance/normal')
  findAllNormal() {
    return this.remindersService.findAllNormal(Importance.Normal);
  }

  @Get('importance/important')
  findAllImportant() {
    return this.remindersService.findAllImportant(Importance.Important);
  }

  @Get('importance/urgent')
  findAllUrgent() {
    return this.remindersService.findAllUrgent(Importance.Urgent);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateReminderDto: UpdateReminderDto) {
    return this.remindersService.update(id, updateReminderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.remindersService.remove(id);
  }
}