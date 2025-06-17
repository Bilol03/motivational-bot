import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { QuoteModule } from 'src/quote/quote.module';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [QuoteModule, UserModule],
  providers: [BotService],
})
export class BotModule {}
