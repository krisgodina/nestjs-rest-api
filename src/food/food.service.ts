import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Food, FoodDocument } from './schemas/food.schema';
import { Model } from 'mongoose';


@Injectable()
export class FoodService {

  constructor(
    @InjectModel(Food.name) private readonly foodModel: Model<FoodDocument>,
  ) { }

  async create(createFoodDto: CreateFoodDto): Promise<Food> {
    const createdFood = await this.foodModel.create(createFoodDto);
    return createdFood;
  }

  async findAll(): Promise<Food[]> {
    return this.foodModel.find().exec();
  }

  async findOne(id: string): Promise<Food> {
    return this.foodModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateFoodDto: UpdateFoodDto): Promise<Food> {
    const updatedFood = await this.foodModel.findByIdAndUpdate(id, updateFoodDto, { new: true });
    return updatedFood;
  }

  async delete(id: string) {
    const deletedFood = await this.foodModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedFood;
  }
}
