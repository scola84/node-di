'use strict';

const lodashMerge = require('lodash.merge');

class ObjectValue {
  constructor(value) {
    this.value = value;
  }

  assign(value) {
    this.value = lodashMerge({}, this.value, value.get());
  }

  get() {
    return this.value;
  }
}

module.exports = ObjectValue;
