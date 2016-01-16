'use strict';

class Module {
  constructor(injector) {
    this.injector = injector;
  }

  addModule(module) {
    this.injector.addModule(module);
  }

  inject(target) {
    return this.injector.inject(target);
  }

  replace(target) {
    return this.injector.replace(target);
  }

  instance(target) {
    return this.injector.instance(target);
  }

  provider(target) {
    return this.injector.provider(target);
  }

  singleton(target) {
    return this.injector.singleton(target);
  }

  array(value) {
    return this.injector.array(value);
  }

  object(value) {
    return this.injector.object(value);
  }

  value(target) {
    return this.injector.value(target);
  }

}

module.exports = Module;
