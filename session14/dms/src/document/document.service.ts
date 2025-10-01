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
    const document = this.docRepo.create(body);

    // save بيرجع object واحد Document وليس array
    const savedDocument = await this.docRepo.save(document);

    if (files && files.length > 0) {
      const attachments = files.map((file) => {
        const att = new Attachment();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        att.pathfile = file.path;
        att.document = savedDocument; // ✅ الآن savedDocument كائن Document صحيح
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        att.document_id = savedDocument.id;
        return att;
      });
      await this.attRepo.save(attachments);
    }

    // جلب الـ document مرة ثانية مع الattachments
    return this.docRepo.findOne({
      where: { id: savedDocument.id },
      relations: ['attachments'],
    });
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
