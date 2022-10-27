var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;


  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

};
treeMethods.contains = function(target, currentParent) {
  var currentParent = currentParent || this;
  var isFound = false;
  if(currentParent.value === target) {
    return true;
  } else if(currentParent.children.length > 0) { //recursion children
    for(var i = 0; i < currentParent.children.length; i++) {
      isFound = this.contains(target, currentParent.children[i]);
      if(isFound) {return true}
    }
    currentParent.children.forEach(function(child) {

    });
  }
  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
