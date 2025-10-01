import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'nvarchar', length: 255 })
  name: string;

  @Column({ type: 'uniqueidentifier', nullable: true })
  parentId: string | null;

  @Column({ type: 'uniqueidentifier' })
  createdby: string;

  @CreateDateColumn({ type: 'datetime2', precision: 0 })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime2', precision: 0 })
  updated_at: Date;
}
