var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; //idk why it's necessary, but i used keyIndex below (lmk if issue here)

  var keyIndex = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[keyIndex] = value;
    keyIndex++;
  };

  someInstance.pop = function() {
    var poppedVal = someInstance[keyIndex-1];
    delete someInstance[keyIndex-1];
    keyIndex--;
    return poppedVal;
  };

  someInstance.size = function() {
    var keys = Object.keys(someInstance).filter(key => !['pop','push','size'].includes(key));
    return keys.length;
  };

  return someInstance;
};
