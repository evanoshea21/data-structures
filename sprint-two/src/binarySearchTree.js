var BinarySearchTree = function(value) {

  var insertionsArr = [value];

  var binaryST = Object.create(binaryMethods);
  binaryST.value = value;
  binaryST.left = undefined;
  binaryST.right = undefined;
  binaryST.insertions = function(val) {
    insertionsArr.push(val);
  }
  binaryST.getInsertions = function() {
    return insertionsArr;
  }

  return binaryST;
};

var binaryMethods = {};

binaryMethods.insert = function(val, thisNode) {

  var thisNode = thisNode || this;

  if (val > thisNode.value){ //val greater than
    if(thisNode.right === undefined) {
      thisNode.right = aNode1(val);
      this.insertions(val);
    } else {
      this.insert(val, thisNode.right);
    }
  } else { //val less than
    if(thisNode.left === undefined) {
      thisNode.left = aNode1(val);
      this.insertions(val);
    } else {
      this.insert(val, thisNode.left);
    }
  }
};

binaryMethods.contains = function(val, currentNode) {
 var isFound = false;
 var currentNode = currentNode || this;
 if(currentNode.value === val) {
  return true;
 } else if(val > currentNode.value){
   if(currentNode.right === undefined) {
    return false;
   }
   isFound = this.contains(val, currentNode.right);
 } else { //value is less than
  if(currentNode.left === undefined) {
    return false;
   }
   isFound = this.contains(val, currentNode.left);
 }
 return isFound;
};

binaryMethods.depthFirstLog = function(cb) {
  var insertsArr = this.getInsertions();
  for(var i = 0; i < insertsArr.length; i++) {
    cb(insertsArr[i]);
  }
};

var aNode1 = function(val) {
  var node = {
    value: val,
    left: undefined, // {NODE}
    right: undefined // {NODE2}
  };
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
