'use strict';

class Replacement {
  constructor(injector, target) {
    this.injector = injector;
    this.target = target;
    this.replacement = null;
  }

  getTarget() {
    return this.target;
  }

  get() {
    return this.injector.get(this.replacement);
  }

  with(replacement) {
    this.replacement = replacement;
    return this;
  }
}

module.exports = Replacement;
