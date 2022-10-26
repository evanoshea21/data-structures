var Stack = function() {
  var instance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  instance.push = stackMethods.push;
  instance.pop = stackMethods.pop;
  instance.size = stackMethods.size;

  return instance;
};

var stackMethods = {};

var getKeys = function(thisArg) {
  return Object.keys(thisArg).filter(key => !['push','pop','size'].includes(key));
};

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
  return getKeys(this).length;
};


