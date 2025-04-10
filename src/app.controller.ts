import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post,Query } from '@nestjs/common';
import { AppService } from './app.service';
import { NotFoundError } from 'rxjs';
import { time } from 'console';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}
 
}


