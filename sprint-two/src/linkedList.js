// I - value
// O - none //modifying the tree
// E - list is empty // just place it in

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //debugger;
    var node = Node(value);

    if(this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var OGheadNode = list.head.value;
    this.head = list.head.next;
    return OGheadNode;
  };

  list.contains = function(target, currentNode) {
    var isFound = false;
    var currentNode = currentNode || list.head;
    if(currentNode.value === target) {
      return true;
    } else if(currentNode.next === null) {
      return false;
    } else {
      isFound =  list.contains(target, currentNode.next);
    }
    return isFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
