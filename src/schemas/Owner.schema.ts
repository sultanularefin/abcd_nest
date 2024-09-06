



import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import { Cat } from "./cat.schema";

export type CatDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {

  @Prop({ required: true })
  name: string;

}


export const OwnerSchema = SchemaFactory.createForClass(Owner);
