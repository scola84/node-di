'use strict';

const Singleton = require('./singleton');

class Injector {
  constructor(...modules) {
    this.modules = new Set();
    this.injections = new Map();
    this.replacements = new Map();

    modules.forEach((module) => {
      this.addModule(module);
    });
  }

  addModule(Module) {
    const module = new Module(this);
    module.configure();
    this.modules.add(module);
  }

  inject(injection) {
    this.injections.set(injection.getTarget(), injection);
  }

  replace(replacement) {
    this.replacements.set(replacement.getTarget(), replacement);
  }

  get(target) {
    if (this.replacements.has(target)) {
      return this.replacements.get(target).get();
    }

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
