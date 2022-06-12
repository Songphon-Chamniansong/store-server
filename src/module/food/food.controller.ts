import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateFoodRequest, CreateFoodResponse } from './dto/create-food.dto';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(
    @Body() request: CreateFoodRequest,
  ): Promise<CreateFoodResponse> {
    return this.foodService.create(request);
  }
}
