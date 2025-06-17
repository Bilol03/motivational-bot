import { Injectable, OnModuleInit } from '@nestjs/common';
import { config } from 'dotenv';
import { Bot } from 'grammy';
import { QuoteService } from 'src/quote/quote.service';
import { UserService } from 'src/user/user.service';
config();

@Injectable()
export class BotService implements OnModuleInit {
  private bot: Bot;
  constructor(
    private readonly quoteService: QuoteService,
    private readonly userService: UserService,
  ) {}

  onModuleInit() {
    this.bot = new Bot(process.env.BOT_TOKEN!);

    this.bot.command('start', async (ctx) => {
      const user = ctx.from;
      if (!user) throw new Error('Sizning ismingiz muhim');
      const exist_user = await this.userService.findOne(user.id);
      
      if (exist_user) {
        return ctx.reply(
          '👋 Salom! Har kuni sizga motivatsion iqtibos yuboradigan botga xush kelibsiz! Yuboring: /motivate',
        );
      }

      const info = {
        name: user ? user.first_name : 'null',
        telegram_id: user ? user.id : 0,
      };
      const data = await this.userService.create(info);
      console.log(data);

      ctx.reply(
        '👋 Salom! Har kuni sizga motivatsion iqtibos yuboradigan botga xush kelibsiz! Yuboring: /motivate',
      );
    });

    this.bot.command('motivate', async (ctx) => {
      const quotes = await this.quoteService.findAll();
      console.log(quotes);
      const quote = quotes.length
        ? quotes[1].quote
        : 'Hozircha motivatsiyalar mavjud emas';
      return ctx.reply(quote);
    });

    this.bot.start();
    console.log('🤖 Bot ishga tushdi!');
  }
}
