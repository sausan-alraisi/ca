import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/document.entity';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { Attachment } from '../attachment/entities/attachment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document, Attachment])],
  providers: [DocumentService],
  controllers: [DocumentController],
})
export class DocumentModule {}
