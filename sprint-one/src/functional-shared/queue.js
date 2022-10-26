var Queue = function() {
  var instance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

  return instance;
};

var queueMethods = {};

var getKeyz = function(thisArg) {
  return Object.keys(thisArg).filter(key => !['enqueue','dequeue','size'].includes(key));
};

queueMethods.enqueue = function(val) {
 if(getKeyz(this).length < 1) {
   this[0] = val;
 } else {
   for(var i = getKeyz(this).length; i > 0; i--) {
    this[i] = this[i-1];
   }
   this[0] = val;
 }
};

queueMethods.dequeue = function() {
  var index = getKeyz(this).length;
  var deqVal = this[index-1];
  delete this[index-1];
  return deqVal;
};

queueMethods.size = function() {
  return getKeyz(this).length;
};


