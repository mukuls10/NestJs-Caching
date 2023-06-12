import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

export class CacheData {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setCacheValues() {
    const value = this.cacheManager.set('key', 'value');
  }
}
