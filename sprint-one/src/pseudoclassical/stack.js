var Stack = function() {
  this.storage = {};
  this.index = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(val) {
    this[this.index] = val;
    this.storage[this.index] = val;
    this.index++;
};

Stack.prototype.pop = function() {
  this.index--;
  var poppedVal = this[this.index];
  delete this[this.index];
  delete this.storage[this.index];
  return poppedVal;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};


