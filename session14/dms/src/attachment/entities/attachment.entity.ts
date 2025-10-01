import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Document } from '../../document/entities/document.entity';

@Entity('attachment')
export class Attachment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'nvarchar', length: 500 })
  pathfile: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  @ManyToOne(() => Document, (document) => document.attachments, {
    onDelete: 'CASCADE',
  })
  document: Document;

  @Column({ type: 'uniqueidentifier' })
  document_id: string;
    att: Document[];
    att: Document[];
}
