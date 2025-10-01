import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';
import { Attachment } from '../attachment/entities/attachment.entity';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly docRepo: Repository<Document>,
    @InjectRepository(Attachment)
    private readonly attRepo: Repository<Attachment>,
  ) {}

  async create(body: any, files: Express.Multer.File[]): Promise<Document> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const document = this.docRepo.create(body);
    const savedDocument = await this.docRepo.save(document);

    const attachments = files.map((file) => {
      const att = new Attachment();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      att.pathfile = file.path; // path الملف اللي اتخزن
      att.document = savedDocument;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      att.document_id = savedDocument.id;
      return att;
    });

    await this.attRepo.save(attachments);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.findOne(savedDocument.id);
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
