var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var store = this._storage
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!store[i]){
    store[i] = []
    store[i].push([k,v])
  }  else if  (store[i] && store[i][0][0] !== k){
    store[i].push([k,v])
  } else if (store[i][0][0] === k){
    store[i][0][1] = v
  }
};

HashTable.prototype.retrieve = function(k){
  var store = this._storage
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(store[i][0])
  if (store[i].length > 1){
   for (var j = 0; j < store[i].length; j++){
    if (store[i][j][0] === k){
      return store[i][j][1]
    }
   }
  } else {
    return store[i][0][1]
  }
};

HashTable.prototype.remove = function(k){
  var store = this._storage
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (store[i].length > 1){
    for (var j = 0; j < store[i].length; j++){
      if (store[i][j][0] === k){
        store[i][j][1] = null
      }
    }
  } else {
  store[i][0][1] = null    
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
