export type User = {
  userId: number;
  email: string;
  verified: boolean;
  type: string;
  password: string;
};

export enum UserType {
  ADMIN = 'admin',
  STUDENT = 'student',
  VISITOR = 'visitor',
  EMPLOYEE = 'employee',
  CLINIC = 'clinic',
  GHOST = 'ghost',
}
