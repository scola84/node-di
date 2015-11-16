'use strict';

class Instance {
  constructor(injector, value) {
    this.injector = injector;
    this.value = value;
  }

  get() {
    return this.injector.get(this.value);
  }
}

module.exports = Instance;
