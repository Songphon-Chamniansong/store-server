import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema, Book } from '../../schemas/book.schema';
import { BookController } from './book.controller';
import { BookDal } from './book.dal';
import { BookService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService, BookDal],
})
export class BookModule {}
