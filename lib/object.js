'use strict';

const lodashMerge = require('lodash.merge');

class ObjectValue {
  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  update(value) {
    this.value = lodashMerge({}, this.value, value.get());
    return this;
  }
}

module.exports = ObjectValue;
