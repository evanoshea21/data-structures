var Queue = function() {
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(val) {
  if(this.size() < 1) {
    this[0] = val;
    this.storage[0] = val;
  } else {
    for(var i = this.size(); i > 0; i--) {
      this[i] = this[i-1];
      this.storage[i] = this.storage[i-1];
    }
    this[0] = val;
    this.storage[0] = val;
  }
};

Queue.prototype.dequeue = function() {
  var deqVal = this[this.size() - 1];
  delete this[this.size() - 1];
  delete this.storage[this.size() - 1];
  return deqVal;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


