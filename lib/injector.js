'use strict';

const ArrayValue = require('./array');
const Injection = require('./injection');
const Instance = require('./instance');
const ObjectValue = require('./object');
const Provider = require('./provider');
const Replacement = require('./replacement');
const Singleton = require('./singleton');
const Value = require('./value');

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

  inject(target) {
    if (this.injections.has(target)) {
      return this.injections.get(target);
    }

    const injection = new Injection(this, target);

    this.injections.set(target, injection);
    return injection;
  }

  replace(target) {
    if (this.replacements.has(target)) {
      return this.replacements.get(target);
    }

    const replacement = new Replacement(this, target);

    this.replacements.set(target, replacement);
    return replacement;
  }

  instance(target) {
    return new Instance(this, this.check(target));
  }

  provider(target) {
    return new Provider(this, this.check(target));
  }

  singleton(target) {
    return new Singleton(this, this.check(target));
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

  check(target) {
    if (typeof target === 'undefined') {
      throw new Error('Target is undefined');
    }

    return target;
  }
}

module.exports = Injector;
