

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from "./schemas/cat.schema";
import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";
// import { Cat } from "./cat.schema";
// import { CatsController } from './cats.controller';
// import { CatsService } from './cats.service';
// import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],

/*  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats'),
  ],*/


  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
