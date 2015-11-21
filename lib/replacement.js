'use strict';

class Replacement {
  constructor(injector, target, replacement) {
    this.injector = injector;
    this.target = target;
    this.replacement = replacement;
  }

  getTarget() {
    return this.target;
  }

  get() {
    return this.injector.get(this.replacement);
  }
}

module.exports = Replacement;
