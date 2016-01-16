'use strict';

class Injection {
  constructor(injector, target) {
    this.injector = injector;
    this.target = target;
    this.args = [];
  }

  getTarget() {
    return this.target;
  }

  with(...args) {
    this.args = args;
    return this;
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
