import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 0,
      store: 'memory',
      max: null,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
