'use strict';

class Injection {
  constructor(injector, target, args) {
    this.injector = injector;
    this.target = target;
    this.args = args;
  }

  getTarget() {
    return this.target;
  }

  setArgument(number, value) {
    this.args[number] = value;
    return this;
  }

  get() {
    const args = this.args.map((arg) => {
      return arg.get();
    });

    return new this.target(...args);
  }
}

module.exports = Injection;
