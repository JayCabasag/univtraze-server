import { Room } from 'src/rooms/entities/room.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('temperatures')
export class Temperature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temperature: number;

  @Column()
  unit: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.temperatures)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Room, (room) => room.temperatures) // Establish the one-to-many relationship
  @JoinColumn({ name: 'room_id' })
  room: Room; // This property will hold the associated room
}
