class Stack {
  constructor() {
    this.storage = {};

  }

  push(val) {
    this[this.size()] = val;
    this.storage[this.size()] = val;
  }
  pop() {
    var poppedVal = this[this.size()-1];
    delete this[this.size()-1];
    delete this.storage[this.size()-1];
    return poppedVal;
  }

  size() {
  return Object.keys(this.storage).length;
  }

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

}