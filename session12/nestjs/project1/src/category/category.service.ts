import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async create(data: any): Promise<Category> {
    const newCategory = new this.categoryModel(data);
    return newCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async update(id: string, data: any): Promise<Category> {
    const category = await this.categoryModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async remove(id: string): Promise<Category> {
    const category = await this.categoryModel.findByIdAndDelete(id).exec();
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
}
