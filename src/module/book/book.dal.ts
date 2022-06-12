import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument, Book } from '../../schemas/book.schema';
import { BookObject } from './interface/book.interface';

@Injectable()
export class BookDal {
  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>,
  ) {}

  async createBook(createFoodObject: BookObject): Promise<void> {
    const book: Book = {
      code: createFoodObject.code,
      name: createFoodObject.name,
      price: createFoodObject.price,
      description: createFoodObject.description,
    };
    await this.bookModel.create(book);
  }
}
