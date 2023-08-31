import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Temperature } from 'src/temperatures/entities/temperature.entity';
import { VisitedRoom } from 'src/visited-rooms/entities/visited-room.entity';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  building_number: string;

  @Column()
  building_name: string;

  @Column()
  room_name: string;

  @Column()
  room_number: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => Temperature, (temperature) => temperature.room) // Specify the inverse side
  temperatures: Temperature[]; // This property will hold an array of associated temperatures

  @OneToMany(() => VisitedRoom, (visitedRoom) => visitedRoom.room)
  visited_rooms: VisitedRoom[];
}
