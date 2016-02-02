'use strict';

class Factory {
  constructor(injector, value) {
    this.injector = injector;
    this.value = value;
  }

  get() {
    return this;
  }

  update(value) {
    this.value = value;
    return this;
  }

  create(...args) {
    return new this.value(...args);
  }
}

module.exports = Factory;
