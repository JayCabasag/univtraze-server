import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('documents')
@Unique(['id_number'])
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_number: string;

  @Column()
  id_front: string;

  @Column()
  id_back: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
