import { Injectable, Logger } from '@nestjs/common';
import { MakeId } from '../../utils/util';
import { CreateBookRequest, CreateBookResponse } from './dto/create-book.dto';
import { BookDal } from './book.dal';
import { BookObject } from './interface/book.interface';

@Injectable()
export class BookService {
  private readonly logger: Logger = new Logger(BookService.name);
  constructor(private readonly bookDal: BookDal) {}

  async create(request: CreateBookRequest): Promise<CreateBookResponse> {
    this.logger.log(request);
    const code = MakeId(15);
    const createFood: BookObject = {
      code,
      ...request,
    };
    await this.bookDal.createBook(createFood);
    return {
      result: true,
      code,
    };
  }
}
