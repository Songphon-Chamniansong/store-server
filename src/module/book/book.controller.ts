import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateBookRequest, CreateBookResponse } from './dto/create-book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async create(
    @Body() request: CreateBookRequest,
  ): Promise<CreateBookResponse> {
    return this.bookService.create(request);
  }
}
