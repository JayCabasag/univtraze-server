import { Profile } from 'src/profiles/entities/profile.entity';
import { Temperature } from 'src/temperatures/entities/temperature.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(() => Temperature, (temperature) => temperature.user) // Specify the inverse side
  temperatures: Temperature[]; // This property will hold an array of associated temperatures

  @OneToOne(() => Profile, (profile) => profile.user) // Specify the inverse side
  @JoinColumn({ name: 'profile_id' }) // Add a foreign key column to represent the relationship
  profile: Profile;
}
