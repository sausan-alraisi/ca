import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './entities/document.entity';
import { Attachment } from '../attachment/entities/attachment.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly docRepo: Repository<Document>,
    @InjectRepository(Attachment)
    private readonly attRepo: Repository<Attachment>,
  ) {}

  async create(body: any, files: Express.Multer.File[]): Promise<Document> {
    const created = this.docRepo.create(body as Partial<Document>);
    if (Array.isArray(created)) {
      throw new Error('Expected a single document payload, received an array');
    }

    // save بيرجع object واحد Document وليس array
    const savedDocument = await this.docRepo.save(created);

    if (files && files.length > 0) {
      const attachments = files.map((file) => {
        const att = new Attachment();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        att.pathfile = file.path;
        att.document = savedDocument; // ✅ الآن savedDocument كائن Document صحيح
        return att;
      });
      await this.attRepo.save(attachments);
    }

    // جلب الـ document مرة ثانية مع الattachments
    const result = await this.docRepo.findOne({
      where: { id: savedDocument.id },
      relations: ['attachments'],
    });
    if (!result) {
      throw new Error('Saved document not found after creation');
    }
    return result;
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
