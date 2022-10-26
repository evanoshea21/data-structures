var Stack = function() {
 var instance = Object.create(stackMethods);

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return instance;
};

var stackMethods = {};
var currentIndex = 0;

stackMethods.push = function(val) {
  this[currentIndex] = val;
  currentIndex++;
};

stackMethods.pop = function() {
  currentIndex--;
  var poppedVal = this[currentIndex];
  delete this[currentIndex];
  return poppedVal;
};

stackMethods.size = function() {
  return Object.keys(this).filter(key => !['push','pop','size'].includes(key)).length;
};



