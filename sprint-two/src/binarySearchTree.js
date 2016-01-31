var BinarySearchTree = function(value){
  this.value = value
  this.left = null// <
  this.right = null// >
};



BinarySearchTree.prototype.insert = function(value){
  if (value < this.value){
    if (this.left === null){
      this.left = new BinarySearchTree(value)
    } else {
      this.left.insert(value)
    }
  }
  if (value > this.value){
    if (this.right === null){
      this.right = new BinarySearchTree(value)
    } else {
      this.right.insert(value)
    }
  }
};

BinarySearchTree.prototype.contains = function(target){
if (this.value === target){
  return true
}
if (target < this.value && this.left !== null){
  if (target === this.left){
    return true
  } else {
    return this.left.contains(target)
  }
}
if (target > this.value && this.right !== null){
  if (target === this.right){
    return true
  } else {
    return this.right.contains(target)
  }
}
return false
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
cb(this.value)
if (this.left !== null){
  this.left.depthFirstLog(cb)
}
if (this.right !== null){
  this.right.depthFirstLog(cb)
}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
