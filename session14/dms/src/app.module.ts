import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-58T4V5M',
      port: 1433,
      username: 'admin',
      database: 'dms',
      password: 'Admin@123',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    }),

    UsersModule,

    OrganizationModule,
  ],
})
export class AppModule {}
