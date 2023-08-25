import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { RolesModule } from './roles/roles.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RoomsModule } from './rooms/rooms.module';
import { ProfilesModule } from './profiles/profiles.module';
import { User } from './users/entities/user.entity';
import { VaccinationsModule } from './vaccinations/vaccinations.module';
import { TemperaturesModule } from './temperatures/temperatures.module';
import { VisitedRoomsModule } from './visited-rooms/visited-rooms.module';
import { Room } from './rooms/entities/room.entity';
import { Temperature } from './temperatures/entities/temperature.entity';
import { Profile } from './profiles/entities/profile.entity';
import { Vaccination } from './vaccinations/entities/vaccination.entity';
import { DocumentsModule } from './documents/documents.module';
import { Document } from './documents/entities/document.entity';
import { ReportsModule } from './reports/reports.module';
import { Report } from './reports/entities/report.entity';
import { Notification } from './notifications/entities/notification.entity';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_USERNAME,
      entities: [
        User,
        Profile,
        Room,
        Temperature,
        Vaccination,
        Document,
        Report,
        Notification,
      ],
      synchronize: true,
    }),
    RolesModule,
    NotificationsModule,
    RoomsModule,
    ProfilesModule,
    VaccinationsModule,
    TemperaturesModule,
    VisitedRoomsModule,
    DocumentsModule,
    ReportsModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
