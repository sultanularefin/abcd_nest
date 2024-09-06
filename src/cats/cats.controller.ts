


import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from "./schemas/cat.schema";

@Controller()
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  get_All_Cats(): []|undefined {
    this.catService.findAll();
    return;
  }
}
