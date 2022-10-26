var Queue = function() {
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {};

  var currentKey = 0;
  var getNumericKeys = function() {
    return Object.keys(someInstance).filter(key => !['enqueue','dequeue','size'].includes(key));
  }
  console.log('NumKeyslength', getNumericKeys().length);

  // Implement the methods below

  someInstance.enqueue = function(value) {

    if(getNumericKeys().length === 0) {
      someInstance[0] = value;
    } else {
      for(var i = getNumericKeys().length; i > 0; i--) {
        someInstance[i] = someInstance[i-1];
      }
      someInstance[0] = value;
    }



  };

  someInstance.dequeue = function() {
    var lastIndex = getNumericKeys().length - 1;
    var deqVal = someInstance[lastIndex];
    delete someInstance[lastIndex];
    return deqVal;
  };

  someInstance.size = function() {

    return getNumericKeys().length;
  };

  return someInstance;
};
