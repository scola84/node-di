'use strict';

let map = {};
let singletons = {};

class DI {
  static annotate(target, args) {
    map[target] = {
      args
    };

    return target;
  }

  static singleton(target) {
    singletons[target] = {};
    return target;
  }

  static get(target) {
    let args = [];

    if (map[target]) {
      args = map[target].args.map((arg) => {
        return DI.get(arg);
      });
    }

    return DI.instantiate(target, args);
  }

  static instantiate(target, args) {
    args = args || [];

    if (singletons[target]) {
      if (!singletons[target].object) {
        singletons[target].object = new target(...args);
      }

      return singletons[target].object;
    }

    return new target(...args);
  }
}

module.exports = DI;
