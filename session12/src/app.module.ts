import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    // MongoDB connection
    MongooseModule.forRoot('mongodb://localhost:27017/categories_db'),
    CategoryModule,
  ],
})
export class AppModule {}
