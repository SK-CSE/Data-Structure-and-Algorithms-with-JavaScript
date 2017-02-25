function Node(element) {
this.element = element;
this.next = null;
}

function LList() {
this.head = new Node("head");
this.find = find;
this.insert = insert;
this.display = display;
this.findPrevious = findPrevious;
this.remove = remove;
}

function remove(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
  prevNode.next = prevNode.next.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) &&
  (currNode.next.element != item)) {
  currNode = currNode.next;
  }
  return currNode;
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
  console.log(currNode.next.element);
  currNode = currNode.next;
  }
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
  currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
var newNode = new Node(newElement);
var current = this.find(item);
newNode.next = current.next;
current.next = newNode;
}

var names = new LList();
names.insert("Saurabh", "head");
names.insert("Suman", "Saurabh");
names.insert("Amit", "Suman");
names.insert("priyanka", "Amit");
names.insert("Alman", "priyanka");
names.display();
console.log();
names.remove("Amit");
names.display();