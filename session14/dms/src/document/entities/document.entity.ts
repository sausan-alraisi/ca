import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('documents')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'nvarchar', length: 50 })
  box_id: string;

  @Column({ type: 'uniqueidentifier' })
  org_id: string;

  @Column({ type: 'nvarchar', length: 100 })
  message_no: string;

  @Column({ type: 'nvarchar', length: 255 })
  subject: string;

  @Column({ type: 'nvarchar', nullable: true })
  leader_comment: string;

  @Column({ type: 'uniqueidentifier' })
  createdby: string;

  @CreateDateColumn({ type: 'datetime2', precision: 0 })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime2', precision: 0 })
  updated_at: Date;

  @Column({ type: 'uniqueidentifier' })
  assigned_user_id: string;

  @Column({ type: 'nvarchar', length: 50 })
  status: string;

  @Column({ type: 'datetime2', precision: 0, nullable: true })
  procedure_date: Date;
}
