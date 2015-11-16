'use strict';

const Injection = require('./injection');
const Instance = require('./instance');
const Provider = require('./provider');
const Value = require('./value');

class Module {
  constructor(injector) {
    this.injector = injector;
    this.target = null;
  }

  addModule(module) {
    this.injector.addModule(module);
  }

  inject(target) {
    this.target = target;
    return this;
  }

  with(...args) {
    this.injector.add(new Injection(this.injector, this.target, args));
    this.target = null;

    return this;
  }

  withArgument(number, value) {
    this.injector.getInjection(this.target).setArgument(number, value);
    this.target = null;

    return this;
  }

  instance(target) {
    return new Instance(this.injector, target);
  }

  provider(target) {
    return new Provider(this.injector, target);
  }

  value(target) {
    return new Value(target);
  }
}

module.exports = Module;
