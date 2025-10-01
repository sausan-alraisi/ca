import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly docRepo: Repository<Document>,
  ) {}

  async create(body: any): Promise<Document[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const doc = this.docRepo.create(body);
    return this.docRepo.save(doc);
  }

  async findAll(): Promise<Document[]> {
    return this.docRepo.find();
  }

  async findOne(id: string): Promise<Document> {
    const doc = await this.docRepo.findOne({ where: { id } });
    if (!doc) throw new Error(`Document with id ${id} not found`);
    return doc;
  }

  async update(id: string, body: any): Promise<Document> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await this.docRepo.update(id, body);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.docRepo.delete(id);
  }
}
