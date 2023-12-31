import { Notification } from 'src/notifications/entities/notification.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Report } from 'src/reports/entities/report.entity';
import { Temperature } from 'src/temperatures/entities/temperature.entity';
import { VisitedRoom } from 'src/visited-rooms/entities/visited-room.entity';
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
import { UserType } from '../interface/user.interface';

@Entity('users')
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

  @OneToMany(() => Report, (report) => report.document)
  reports: Report[];

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @OneToMany(() => VisitedRoom, (visitedRoom) => visitedRoom.user)
  @JoinColumn({ name: 'visited_rooms' })
  visited_rooms: VisitedRoom[];
}
