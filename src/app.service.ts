import { Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import * as fs from 'fs';
import { data } from 'test';
// const data = require('./ETH.json');

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getHello(): Promise<string> {
    console.log('get');
    console.time('setting data');
    console.log(data.length);
    // await this.cacheManager.set('test', [
    //   { a: 'a', b: 2 },
    //   { c: 'c', d: 'd' },
    // ]);
    await this.cacheManager.set('ETH', data);
    console.log(`sending 150 entries to cache`);
    for (let i = 0; i < 150; i++) {
      await this.cacheManager.set(`ETH${i}`, data);
    }
    console.log(`sending other 150 entries to cache`);
    for (let i = 150; i < 300; i++) {
      await this.cacheManager.set(`ETH${i}`, data);
    }
    console.timeEnd('setting data');

    console.time('getting data');
    const value: any[] = await this.cacheManager.get('ETH29');

    console.timeEnd('getting data');

    console.log(value.length);

    return 'Hello World!';
  }

  async anotherEndpoint(symbol: string) {
    const val = await this.cacheManager.get(symbol);
    return val[0];
  }
}
