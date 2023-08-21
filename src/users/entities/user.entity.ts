import { Profile } from 'src/profiles/entities/profile.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile, (profile) => profile.user) // Specify the inverse side
  @JoinColumn({ name: 'profile_id' }) // Add a foreign key column to represent the relationship
  profile: Profile;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @Column({ default: false })
  verified: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
