import { Injectable, Logger } from '@nestjs/common';
import { MakeId } from '../../utils/util';
import { CreateFoodRequest, CreateFoodResponse } from './dto/create-food.dto';
import { FoodDal } from './food.dal';
import { FoodObject } from './interface/food.interface';

@Injectable()
export class FoodService {
  private readonly logger: Logger = new Logger(FoodService.name);
  constructor(private readonly foodDal: FoodDal) {}

  async create(request: CreateFoodRequest): Promise<CreateFoodResponse> {
    this.logger.log(request);
    const code = MakeId(15);
    const createFood: FoodObject = {
      code,
      ...request,
    };
    await this.foodDal.createFood(createFood);
    return {
      result: true,
      code,
    };
  }
}
