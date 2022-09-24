import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './schemas/food.schema';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto) {
    return await this.foodService.create(createFoodDto);
  }

  @Get()
  async findAll(): Promise<Food[]> {
    return this.foodService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Food> {
    return this.foodService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(id, updateFoodDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.foodService.delete(id);
  }
}
