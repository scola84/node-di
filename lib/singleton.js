'use strict';

const Instance = require('./instance');

class Provider {
  constructor(injector, value) {
    this.injector = injector;
    this.value = value;
    this.instance = null;
  }

  get() {
    if (!this.instance) {
      this.instance = new Instance(this.injector, this.value);
    }

    return this.instance;
  }
}

module.exports = Provider;
