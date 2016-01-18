'use strict';

class Instance {
  constructor(injector, value) {
    this.injector = injector;
    this.value = value;
  }

  get() {
    return this.injector.get(this.value);
  }

  update(value) {
    this.value = value;
    return this;
  }
}

module.exports = Instance;
