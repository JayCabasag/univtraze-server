import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';

@Entity('documents')
@Unique(['id_number'])
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile, (profile) => profile.document)
  profile: Profile;

  @Column()
  kind: string;

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
