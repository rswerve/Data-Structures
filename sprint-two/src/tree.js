var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods)
  newTree.children = []
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
this.children.push(Tree(value));
};

treeMethods.contains = function(target){
var result = false
if (this.value === target){
  return true
}
for (var i = 0; i < this.children.length; i++){
  if (this.children[i].value === target){
    result = true
  } 
  if (this.children[i].children.length > 0 && result !== true){
    result = this.children[i].contains(target)
  }
}

return result
};

function extend (toObject, fromObject){
  for (var key in fromObject){
    toObject[key] = fromObject[key]
  }
}
//this.children[i].children
//functional-shared

// var aTree = Tree(5)
// console.log(aTree)
// aTree.addChild(4)
// console.log(aTree)
// aTree.addChild(3)
// console.log(aTree)
// aTree.children[0].addChild(7)
// aTree.children[1].addChild(8)
//console.log(aTree)
//console.log(aTree)
// console.log(aTree.children[0].children[0].value)
// console.log(aTree.contains(8))
