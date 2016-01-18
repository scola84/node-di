'use strict';

class ArrayValue {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  update(value) {
    this.value = this.value.concat(value.get());
    return this;
  }
}

module.exports = ArrayValue;
