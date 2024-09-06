

import { Model,Connection } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel,InjectConnection } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat;
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    const result= await this.catModel.findOne({ _id: id }).exec();
    // if(result){
    if(!result){
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    else{
      return result;
    }
    // }
  }

  async delete(id: string) {
    const deletedCat = await this.catModel.findByIdAndDelete({ _id: id })
    // const deletedCat = await this.catModel.findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
