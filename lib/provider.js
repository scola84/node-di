'use strict';

const Instance = require('./instance');

class Provider {
  constructor(injector, value) {
    this.injector = injector;
    this.value = value;
  }

  get() {
    return new Instance(this.injector, this.value);
  }
}

module.exports = Provider;
