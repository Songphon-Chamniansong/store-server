import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FoodDocument, Food } from '../../schemas/food.schema';
import { FoodObject } from './interface/food.interface';

@Injectable()
export class FoodDal {
  constructor(
    @InjectModel(Food.name)
    private foodModel: Model<FoodDocument>,
  ) {}

  async createFood(createFoodObject: FoodObject): Promise<void> {
    const food: Food = {
      code: createFoodObject.code,
      name: createFoodObject.name,
      price: createFoodObject.price,
      description: createFoodObject.description,
      expirationDate: createFoodObject.expirationDate,
    };
    await this.foodModel.create(food);
  }
}
