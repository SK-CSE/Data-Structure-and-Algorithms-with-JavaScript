function Node(element) {
this.element = element;
this.next = null;
}

class LList {
	
  constructor() {
  this.head = new Node("head");
  }

  remove(item) {
    const prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) &&
    (currNode.next.element != item)) {
    currNode = currNode.next;
    }
    return currNode;
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
    }
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
    currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
}

const names = new LList();
names.insert("Saurabh", "head");
names.insert("Suman", "Saurabh");
names.insert("Amit", "Suman");
names.insert("priyanka", "Amit");
names.insert("Alman", "priyanka");
names.display();
console.log();
names.remove("Amit");
names.display();