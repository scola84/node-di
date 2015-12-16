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

  withArgument(number, value) {
    this.args[number] = value;
    return this;
  }

  assignArgument(number, value) {
    if (!this.args[number]) {
      this.args[number] = value;
    } else {
      this.args[number].assign(value);
    }

    return this;
  }

  concatArgument(number, value) {
    if (!this.args[number]) {
      this.args[number] = value;
    } else {
      this.args[number].concat(value);
    }

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
