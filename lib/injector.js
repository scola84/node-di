'use strict';

const ArrayValue = require('./array');
const Factory = require('./factory');
const Injection = require('./injection');
const Instance = require('./instance');
const ObjectValue = require('./object');
const Provider = require('./provider');
const Replacement = require('./replacement');
const Singleton = require('./singleton');
const Value = require('./value');

let instance = null;

class Injector {
  constructor() {
    this.modules = new Map();
    this.injections = new Map();
    this.replacements = new Map();
  }

  static getInstance() {
    if (!instance) {
      instance = new Injector();
    }

    return instance;
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

  array(value) {
    return new ArrayValue(value);
  }

  factory(target) {
    return new Factory(this, this.check(target));
  }

  instance(target) {
    return new Instance(this, this.check(target));
  }

  object(value) {
    return new ObjectValue(value);
  }

  provider(target) {
    return new Provider(this, this.check(target));
  }

  singleton(target) {
    return new Singleton(this, this.check(target));
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

  check(target) {
    if (typeof target === 'undefined') {
      throw new Error('Target is undefined');
    }

    return target;
  }
}

module.exports = Injector;
