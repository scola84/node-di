'use strict';

class Injector {
  constructor(...modules) {
    this.injections = new Map();
    this.modules = new Set();

    modules.forEach((module) => {
      this.addModule(module);
    });
  }

  addModule(Module) {
    const module = new Module(this);
    module.configure();
    this.modules.add(module);
  }

  add(injection) {
    this.injections.set(injection.getTarget(), injection);
  }

  getInjection(target) {
    return this.injections.get(target);
  }

  get(target) {
    if (this.injections.has(target)) {
      return this.injections.get(target).get();
    }

    return new target();
  }
}

module.exports = Injector;
