import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SCHEMA_CONFIG } from '../config/schema.config';

export type BookDocument = Book & Document;

@Schema({
  collection: SCHEMA_CONFIG.FOOD_COLLECTION,
})
export class Book {
  @Prop({
    unique: true,
  })
  code: string;
  @Prop()
  name: string;
  @Prop()
  price: string;
  @Prop()
  description?: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
