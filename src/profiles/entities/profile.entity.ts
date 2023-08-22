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
} from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

  @Column()
  profile_photo: string;

  @Column()
  firstname: string;

  @Column()
  middlename: string;

  @Column()
  lastname: string;

  @Column()
  suffix: string;

  @Column()
  address: string;

  @Column()
  date_of_birth: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  gender: string;

  @OneToMany(() => Vaccination, (vaccination) => vaccination.profile)
  vaccinations: Vaccination[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}

// @Entity('student_profiles')
// export class StudentProfile extends Profile {
//   @Column()
//   student_id: string;

//   @Column()
//   front_id: string;

//   @Column()
//   back_id: string;

//   @Column()
//   course: string;

//   @Column()
//   year_and_section: string;

//   @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   created_at: Date;

//   @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   updated_at: Date;
// }

// @Entity('visitor_profiles')
// export class VisitorProfile extends Profile {
//   @Column()
//   valid_id: string;

//   @Column()
//   front_id: string;

//   @Column()
//   back_id: string;
// }
// @Entity('employee_profiles')
// export class EmployeeProfile extends Profile {
//   @Column()
//   employee_id: string;

//   @Column()
//   front_id: string;

//   @Column()
//   back_id: string;

//   @Column()
//   department: string;

//   @Column()
//   position: string;
// }

// @Entity('clinic_profiles')
// export class ClinicProfile extends Profile {
//   @Column()
//   employee_id: string;

//   @Column()
//   front_id: string;

//   @Column()
//   back_id: string;

//   @Column()
//   department: string;

//   @Column()
//   position: string;
// }

// @Entity('admin_profiles')
// export class AdminProfile extends Profile {
//   @Column()
//   employee_id: string;

//   @Column()
//   front_id: string;

//   @Column()
//   back_id: string;

//   @Column()
//   department: string;

//   @Column()
//   position: string;
// }
