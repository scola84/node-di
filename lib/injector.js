'use strict';

const Singleton = require('./singleton');

class Injector {
  constructor() {
    this.modules = new Map();
    this.injections = new Map();
    this.replacements = new Map();
  }

  addModule(Module) {
    if (this.modules.has(Module)) {
      return this;
    }

    const module = new Module(this);
    module.configure();

    this.modules.set(Module, module);

    return this;
  }

  inject(injection) {
    if (this.injections.has(injection.getTarget())) {
      return this.injections.get(injection.getTarget());
    }

    this.injections.set(injection.getTarget(), injection);
    return injection;
  }

  replace(replacement) {
    if (this.replacements.has(replacement.getTarget())) {
      return this.replacements.get(replacement.getTarget());
    }

    this.replacements.set(replacement.getTarget(), replacement);
    return replacement;
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

  getSingleton(target) {
    return new Singleton(this, target).get();
  }
}

module.exports = Injector;
