import { Test, TestingModule } from '@nestjs/testing';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { getModelToken } from '@nestjs/mongoose';
import { Food } from './schemas/food.schema';

describe('FoodController', () => {
  let controller: FoodController;
  let service: FoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodController],
      providers: [
        FoodService,
        { provide: getModelToken(Food.name), useValue: jest.fn() },
      ],
    }).compile();

    controller = module.get<FoodController>(FoodController);
    service = module.get<FoodService>(FoodService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


});

