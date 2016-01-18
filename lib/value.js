'use strict';

class Value {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  update(value) {
    this.value = value;
    return this;
  }
}

module.exports = Value;
