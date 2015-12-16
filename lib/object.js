'use strict';

class ObjectValue {
  constructor(value) {
    this.value = value;
  }

  assign(value) {
    this.value = Object.assign({}, this.value, value.get());
  }

  get() {
    return this.value;
  }
}

module.exports = ObjectValue;
