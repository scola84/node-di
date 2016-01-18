'use strict';

const globalCache = new Map();

class Singleton {
  constructor(injector, value) {
    this.injector = injector;
    this.value = value;
  }

  get() {
    if (!globalCache.has(this.injector)) {
      globalCache.set(this.injector, new Map());
    }

    const localCache = globalCache.get(this.injector);

    if (!localCache.has(this.value)) {
      localCache.set(this.value, this.injector.get(this.value));
    }

    return localCache.get(this.value);
  }

  update(value) {
    this.value = value;
    return this;
  }
}

module.exports = Singleton;
