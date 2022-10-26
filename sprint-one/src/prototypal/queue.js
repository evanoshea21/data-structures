var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
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

queueMethods.dequeue = function() {
  var deqVal = this[this.size() - 1];
  console.log('deqReturn: ', deqVal);
  delete this[this.size() - 1];
  delete this.storage[this.size() - 1];
  return deqVal;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


