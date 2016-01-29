var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
   if (list.head === null){
    list.head = Node(value)
    list.tail = Node(value)
   } else {
    list.tail = Node(value)
    list.head.next = value
   }
  };

  list.removeHead = function(){
    var headValue = list.head.value
    list.head.value = list.head.next
    return headValue
  };

  list.contains = function(target){
    for (var key in list){
      if (list[key].value === target){
        return true
      }
    }
      return false
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
