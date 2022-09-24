import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { MongooseModule } from '@nestjs/mongoose';
import keys from './config/keys';

@Module({
  imports: [
    FoodModule,
    MongooseModule.forRoot(keys.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
