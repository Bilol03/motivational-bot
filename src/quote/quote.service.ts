import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private readonly quoteRepository: Repository<Quote>
  ){}

  async create(createQuoteDto: CreateQuoteDto) {
    const data = await this.quoteRepository.create(createQuoteDto)
    return await this.quoteRepository.save(data)
  }

  async findAll() {
    return await this.quoteRepository.find()
  }

  async findOne(id: number) {
    const data = await this.quoteRepository.findOne({where: {id}})
    if(!data) throw new NotFoundException("Quote not found")
    return data
  }


}
