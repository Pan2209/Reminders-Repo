import { ApiProperty } from "@nestjs/swagger";
import { title } from "process";
import { Reminder } from "../entities/reminder.entity";
import { Importance } from "@prisma/client";

export class CreateReminderDto {

@ApiProperty()
title : string;
@ApiProperty()
reminder : string;
@ApiProperty({required:false})
note : string;
@ApiProperty()
minute : number;
@ApiProperty()
hour : number;
@ApiProperty()
day : number;
@ApiProperty()
month : number;
@ApiProperty()
year : number;
@ApiProperty({default:false})
status : boolean;
@ApiProperty()
importance : Importance;
}