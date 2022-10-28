
// Instantiate a new graph
var Graph = function() {
  // this = Object.create(Graph.prototype);
  this.nodes = {};
  // this = {
  //   nodes: {
  //     //vertexofNode : {}
  //     //^ meaning value points to whole node {val: , edges: []}
  //   };
  //   // xNode = {
  //   //   value: 4,
  //   //   edgesTo: [2,5,1,8]
  //   // }
  //   addNode: func,
  //   contains: func,
  //   removeNode: func,
  //   hasEdge: func,
  //   addEdge: func,
  //   removeEdge: func,
  //   forEachNode: func
  // }
  //  //edit this and param


  //  return this;
};




// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = aNode(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.nodes).includes(node + '');
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var remEdgesFrom = this.nodes[node].edgesTo; //array of nodes to remove edge of input node
  for(var i = 0; i < remEdgesFrom.length; i++) {
    this.removeEdge(node, remEdgesFrom[i]);
  }
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(!this.nodes[fromNode] || !this.nodes[toNode]) {
    return false;
  }
  var x = this.nodes[fromNode].edgesTo.includes(toNode);
  var y = this.nodes[toNode].edgesTo.includes(fromNode);
  var z = x && y;
  return z;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edgesTo.push(toNode);
  this.nodes[toNode].edgesTo.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].edgesTo.indexOf(toNode);
  this.nodes[fromNode].edgesTo.splice(index, 1);
  var index2 = this.nodes[toNode].edgesTo.indexOf(fromNode);
  this.nodes[toNode].edgesTo.push(index2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
var obj = this.nodes;
  for(var key in obj) {
    cb.call(this, Number(key));
  }
};

var aNode = function(val) {
 var node = {};
 node.value = val;
 node.edgesTo = [];
 return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


