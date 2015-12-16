'use strict';

const ArrayValue = require('./array');
const Injection = require('./injection');
const Instance = require('./instance');
const List = require('./list');
const ObjectValue = require('./object');
const Provider = require('./provider');
const Replacement = require('./replacement');
const Singleton = require('./singleton');
const Value = require('./value');

class Module {
  constructor(injector) {
    this.injector = injector;
    this.target = null;
    this.type = null;
  }

  addModule(module) {
    this.injector.addModule(module);
  }

  inject(target) {
    this.target = target;
    this.type = 'inject';

    return this;
  }

  replace(target) {
    this.target = target;
    this.type = 'replace';

    return this;
  }

  with(...args) {
    if (this.type === 'inject') {
      this.injector.inject(new Injection(this.injector, this.target, args));
    } else {
      this.injector.replace(new Replacement(this.injector, this.target, ...args));
    }

    return this;
  }

  withArgument(number, value) {
    this.injector.getInjection(this.target).withArgument(number, value);
    return this;
  }

  assignArgument(number, value) {
    this.injector.getInjection(this.target).assignArgument(number, value);
    return this;
  }

  concatArgument(number, value) {
    this.injector.getInjection(this.target).concatArgument(number, value);
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
