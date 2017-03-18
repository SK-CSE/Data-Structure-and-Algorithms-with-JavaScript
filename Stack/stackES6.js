class Stack {
  constructor() {
     this.dataStore = [];
     this.top = 0;
  }

  push(element) {
    this.dataStore[this.top++]=element;
  }

  pop() {
    if(this.top !==0){
    console.log( );
    return this.dataStore[--this.top];
    }
    return "underflow";
  }

  peek() {
    if(this.top !=0){
      console.log(this.dataStore[this.top -1]);
      return true ;
    }
    console.log("Stack is empty")
    return false;
  }

  clear() {
    this.dataStore = [];
    this.top = 0;
  }

  length() {
    return this.top;
  }

  print() {
    if(this.top!==0){
      console.log("***")
      for(let i=this.top-1;i>=0;i--){
        console.log(this.dataStore[i]);
      }
      console.log("***")
      return true;
    }
    console.log("Stack is empty");
    return false;
  }
}


const stack = new Stack();
stack.push(10);
stack.push(20);

stack.print(); // [ 10, 20 ]
console.log(stack.length()); // 2

console.log(stack.pop()); // 20
console.log(stack.length()); // 1
stack.print();  // [10]

stack.push(30);
stack.peek(); // 30
stack.print(); // [ 10, 30 ]
console.log(stack.length()); // 2

stack.clear();
stack.print(); // Stack is empty

stack.clear();
console.log(stack.length()); // 0

stack.peek(); // Stack is empty
console.log(stack.length()); // 0

console.log(stack.pop()); // underflow
console.log(stack.length()); // 0

stack.push(40);
stack.push(50);

stack.peek(); // 50
console.log(stack.length()); // 2
stack.print(); // [40,50]