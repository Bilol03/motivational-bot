import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { UserModule } from './user/user.module';
import { QuoteModule } from './quote/quote.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [BotModule, UserModule, QuoteModule, SchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
