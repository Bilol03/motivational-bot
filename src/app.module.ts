import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { QuoteModule } from './quote/quote.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { UserModule } from './user/user.module';
config();

@Module({
  imports: [
    BotModule,
    UserModule,
    QuoteModule,
    SchedulerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.dbhost,
      port: process.env.dbport ? +process.env.dbport : 5432,
      username: process.env.dbusername,
      password: process.env.dbpassword,
      database: process.env.dbdatabase,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
