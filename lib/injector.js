'use strict';

const Singleton = require('./singleton');

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

  get(target) {
    if (this.injections.has(target)) {
      return this.injections.get(target).get();
    }

    return new target();
  }

  getInjection(target) {
    return this.injections.get(target);
  }

  getSingleton(target) {
    return new Singleton(this, target).get();
  }
}

module.exports = Injector;
