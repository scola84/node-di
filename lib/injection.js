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

  insertArgument(index, value) {
    this.args[index] = value;
    return this;
  }

  updateArgument(index, value) {
    this.args[index] = this.args[index] ?
      this.args[index].update(value) :
      value;

    return this;
  }

  deleteArgument(index) {
    this.args[index] = null;
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
