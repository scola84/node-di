'use strict';

class ObjectValue {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  update(value) {
    this.value = Object.assign(this.value, value.get());
    return this;
  }
}

module.exports = ObjectValue;
