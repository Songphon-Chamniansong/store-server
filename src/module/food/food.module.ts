import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodSchema, Food } from '../../schemas/food.schema';
import { FoodController } from './food.controller';
import { FoodDal } from './food.dal';
import { FoodService } from './food.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }]),
  ],
  controllers: [FoodController],
  providers: [FoodService, FoodDal],
})
export class FoodModule {}
