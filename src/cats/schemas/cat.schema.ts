import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Owner } from "../../schemas/Owner.schema";

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  // @Prop()
  // name: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop([String])
  tags: string[];


  // inside the class definition
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: Owner;


  /*
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' }] })
owners: Owner[];
   */

  /*
  @Prop(raw({
  firstName: { type: String },
  lastName: { type: String }
}))
details: Record<string, any>;
   */
}

export const CatSchema = SchemaFactory.createForClass(Cat);


// WITHOUT DECORATORS:

/*
export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
 */
