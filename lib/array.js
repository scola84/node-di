'use strict';

class ArrayValue {
  constructor(value) {
    this.value = value;
  }

  concat(value) {
    this.value = this.value.concat(value.get());
  }

  get() {
    return this.value;
  }
}

module.exports = ArrayValue;
