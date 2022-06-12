import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SCHEMA_CONFIG } from '../config/schema.config';

export type FoodDocument = Food & Document;

@Schema({
  collection: SCHEMA_CONFIG.FOOD_COLLECTION,
})
export class Food {
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
  @Prop({
    name: 'expiration_date',
  })
  expirationDate: Date;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
