import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { StudentService } from './student/student.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
