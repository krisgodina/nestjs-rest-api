import { Test, TestingModule } from '@nestjs/testing';
import { FoodService } from './food.service';
import { getModelToken } from '@nestjs/mongoose';
import { Food } from './schemas/food.schema';


describe('FoodService', () => {
  let service: FoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FoodService,
        { provide: getModelToken(Food.name), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<FoodService>(FoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
