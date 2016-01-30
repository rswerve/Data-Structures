

// ###Graph Solution

// Instantiate a new graph
var Graph = function(value){
  this[value] = [];
};

// -----------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value){
  this[value] = []

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target){
  for (var key in this){
    if (key === target){
      return true
    }
  }
  return false
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(value){
  delete this[value]
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue){
  if (this[fromValue].indexOf(toValue) !== -1 &&
      this[toValue].indexOf(fromValue) !== -1){
    return true
  }
  return false
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue){
  this[fromValue].push(toValue)
  this[toValue].push(fromValue)
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue){
  var fromIndex = this[toValue].indexOf(fromValue)
  this[toValue].splice(fromIndex, 1)
  var toIndex = this[fromValue].indexOf(toValue)
  this[fromValue].splice(toIndex, 1)
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



