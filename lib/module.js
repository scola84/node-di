'use strict';

const ArrayValue = require('./array');
const Injection = require('./injection');
const Instance = require('./instance');
const ObjectValue = require('./object');
const Provider = require('./provider');
const Replacement = require('./replacement');
const Singleton = require('./singleton');
const Value = require('./value');

class Module {
  constructor(injector) {
    this.injector = injector;
  }

  addModule(module) {
    this.injector.addModule(module);
  }

  inject(target) {
    return this.injector.inject(new Injection(this.injector, target));
  }

  replace(target) {
    return this.injector.replace(new Replacement(this.injector, target));
  }

  instance(target) {
    return new Instance(this.injector, this.check(target));
  }

  provider(target) {
    return new Provider(this.injector, this.check(target));
  }

  singleton(target) {
    return new Singleton(this.injector, this.check(target));
  }

  array(value) {
    return new ArrayValue(value);
  }

  object(value) {
    return new ObjectValue(value);
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
