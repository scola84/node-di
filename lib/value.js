'use strict';

class Value {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }
}

module.exports = Value;
