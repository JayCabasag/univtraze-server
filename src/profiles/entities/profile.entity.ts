import { User } from 'src/users/entities/user.entity';
import { Vaccination } from 'src/vaccinations/entities/vaccination.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { DEFAULT_PROFILE } from '../constants';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ default: DEFAULT_PROFILE })
  profile_photo: string;

  @Column()
  first_name: string;

  @Column()
  middle_name: string;

  @Column()
  last_name: string;

  @Column()
  suffix: string;

  @Column()
  address: string;

  @Column()
  date_of_birth: string;

  @Column()
  phone_number: string;

  @Column()
  gender: string;

  @OneToMany(() => Vaccination, (vaccination) => vaccination.profile)
  vaccinations: Vaccination[];

  @OneToOne(() => Document, (document) => document.profile)
  document: Document;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
