class List {
  constructor() {
     this.listSize = 0;
     this.pos = 0;
     this.dataStore = []; // initializes an empty array to store list elements
  }

  // This function appends a new element onto the list at the next available position
  append(element) {
     this.dataStore[this.listSize++] = element;
  }

  // to return position of the element in the list
  find(element) {
    for(let i=0; i< this.dataStore.length; ++i){
      if(this.dataStore[i]==element){
        return i;
      }
    }
    console.log(`${element} not found in the list`);
    return -1;
  }

  // to remove an element from the list
  remove(element) {
    const foundAt = this.find(element);
    if(foundAt > -1){
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
    }
    return false;
  }

  // to print the length of the list
  length() {
    return this.listSize;
  }

  // to print the list
  toString() {
    return this.dataStore;
  }

  // a function to insert element after a given element
  insert(element, afterElement) {
    const insertPos = this.find(afterElement);
    if(insertPos >-1){
      this.dataStore.splice(insertPos+1,0,element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  // a function to clear out the elements of a list and allow new elements to be entered
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  //a function to check if a particular element is part of the list
  contains(element) {
    for(let i=0; i<this.listSize; ++i){
      if(this.dataStore[i] == element){
        return true;
      }
    }
    console.log(`${element} don't exist`);
    return false;
  }

  // allows movement through a list
  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize-1;
  }

  prev() {
    if(this.pos>0){
      --this.pos;
      return true;
    }
    console.log("reached the starting of the list");
    return false;
  }

  next() {
    if(this.pos<this.listSize-1){
      ++this.pos;
      return true;
    }
    console.log("reached the end of the list");
    return false;
  }

  currPos() {
    return this.pos;
  }

  moveToPos(position) {
    if (position <= this.listSize-1) {
      this.pos = position;
      return true;
    }
    console.log("%d is beyond the length of the list",position);
    return false;
  }

  // displays the current element in a list while traversing
  getElement() {
     return this.dataStore[this.pos];
  }
}

const nameList = new List();

nameList.append("Saurabh");
nameList.append("Suman");
nameList.append("Anant");
nameList.append("Madhukar");
console.log(nameList.toString()); // [ 'Saurabh', 'Suman', 'Anant', 'Madhukar' ]

nameList.contains("Ekansh"); // Ekansh does not exist

nameList.insert("Ekansh","Madhukar");
console.log(nameList.toString()); // [ 'Saurabh', 'Suman', 'Anant', 'Madhukar', 'Ekansh' ]

nameList.insert("Ekansh","Rajesh"); // Rajesh not found in the list

nameList.front();
console.log(nameList.getElement());// Saurabh
nameList.next();
console.log(nameList.getElement()); // Suman
nameList.next();
nameList.next();
nameList.next();
nameList.next(); // reached the end of the list
nameList.next(); // reached the end of the list
nameList.prev();
console.log(nameList.getElement()); // Madhukar
console.log(nameList.currPos()); //3


nameList.end();
console.log(nameList.currPos()); //4
console.log(nameList.getElement()); // Ekansh

nameList.moveToPos(2); // it should be between 0 to nameList.length()-1
console.log(nameList.currPos()); //2
console.log(nameList.getElement()); // Anant

console.log(nameList.length()); //5

nameList.moveToPos(10); // 10 is beyond the length of the list
console.log(nameList.currPos()); //2
console.log(nameList.getElement()); // Anant