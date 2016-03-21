'use strict';

const scolaAssign = require('@scola/assign');

class ObjectValue {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  update(value) {
    this.value = scolaAssign(this.value, value.get());
    return this;
  }
}

module.exports = ObjectValue;
