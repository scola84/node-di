'use strict';

const Injection = require('./injection');
const Instance = require('./instance');
const List = require('./list');
const Provider = require('./provider');
const Singleton = require('./singleton');
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
    return new Instance(this.injector, this.check(target));
  }

  list(...targets) {
    targets = targets.map((target) => {
      return this.check(target);
    });

    return new List(this.injector, targets);
  }

  provider(target) {
    return new Provider(this.injector, this.check(target));
  }

  singleton(target) {
    return new Singleton(this.injector, this.check(target));
  }

  value(target) {
    return new Value(this.check(target));
  }

  check(target) {
    if (typeof target === 'undefined') {
      throw new Error('Target is undefined');
    }

    return target;
  }
}

module.exports = Module;
