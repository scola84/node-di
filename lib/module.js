'use strict';

class Module {
  constructor(injector) {
    this.injector = injector;
  }

  addModule(module) {
    this.injector.addModule(module);
  }

  array(value) {
    return this.injector.array(value);
  }

  factory(value) {
    return this.injector.factory(value);
  }

  inject(target) {
    return this.injector.inject(target);
  }

  instance(target) {
    return this.injector.instance(target);
  }

  object(value) {
    return this.injector.object(value);
  }

  provider(target) {
    return this.injector.provider(target);
  }

  replace(target) {
    return this.injector.replace(target);
  }

  singleton(target) {
    return this.injector.singleton(target);
  }

  value(target) {
    return this.injector.value(target);
  }
}

module.exports = Module;
