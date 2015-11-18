'use strict';

class List {
  constructor(injector, values) {
    this.injector = injector;
    this.values = values;
  }

  get() {
    return this.values.map((value) => {
      return this.injector.get(value);
    });
  }
}

module.exports = List;
