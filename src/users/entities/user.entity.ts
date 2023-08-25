import { Notification } from 'src/notifications/entities/notification.entity';
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
  Unique,
} from 'typeorm';

export enum UserType {
  ADMIN = 'admin',
  STUDENT = 'student',
  VISITOR = 'visitor',
  EMPLOYEE = 'employee',
  CLINIC = 'clinic',
  GHOST = 'ghost',
}

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.GHOST,
  })
  type: UserType;

  @Column({ default: false })
  verified: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => Temperature, (temperature) => temperature.user)
  temperatures: Temperature[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;
}
