import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './module/book/book.module';
import { FoodModule } from './module/food/food.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL ?? '', {
      dbName: process.env.DATABASE_NAME,
      retryWrites: true,
      w: 'majority',
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASSWORD,
    }),
    FoodModule,
    BookModule,
  ],
})
export class AppModule {}
