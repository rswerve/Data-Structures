var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    // declare a new Node(value)
    var newNode = Node(value);

    // declare a variable to keep track of current node
    var current;

    // if list is empty
    if(this.head === null){ 

      // set list's head to current node
      this.head = newNode;

      // store current node at tail
      this.tail = this.head;

    } else {
      // {value: 4, next: null}
      this.head.next = newNode;
      // {value: 4, next: {value: 5, next: null}}
      this.tail = newNode;
      // {value: 4, next: null}
    }
  }; 

  list.removeHead = function(){
    // store value of head to return
    var headValue = this.head.value;

    //reassign head
    this.head = this.head.next;
    
    return headValue;
  };

  list.contains = function(target){
    //

  };

  return list;
};

function Node (value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// var scratchList = {
//   head: {value: "a", next: {obj} },
//   tail: {value: "e", next: null},
//   addToTail: {fn},
//   removeHead: {fn},
//   contains: {fn},
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
should remove the head from the list when removeHead is called
should return the value of the former head when removeHead is called
should contain a value that was added
should not contain a value that was removed
*/


