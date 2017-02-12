function Stack() {
   this.dataStore = [];
   this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.length = length;
   this.clear = clear;
   this.print = print;
}

function push(element){
  this.dataStore[this.top++]=element;
}
function pop(){
  if(this.top !==0){
  console.log( this.dataStore[--this.top]);
  return true;
  }
  console.log("underflow");
  return false;
}

function peek(){
  if(this.top !=0){
    console.log(this.dataStore[this.top -1]);
    return true ;
  }
  console.log("Stack is empty")
  return false;
}

function clear(){
  this.dataStore = [];
  this.top = 0;
}

function length(){
  console.log(this.top);
}

function print(){
  if(this.top!==0){
    console.log("***")
    for(var i=this.top-1;i>=0;i--){
      console.log(this.dataStore[i]);
    }
    console.log("***")
    return true;
  }
  console.log("Stack is empty");
  return false;
}

var stack = new Stack();
stack.push(10);
stack.push(20);

stack.print(); // [ 10, 20 ]
stack.length(); // 2

stack.pop(); // 20
stack.length(); // 1
stack.print();  // [10]

stack.push(30);
stack.peek(); // 30
stack.print(); // [ 10, 30 ]
stack.length(); // 2

stack.clear();
stack.print(); // Stack is empty

stack.clear();
stack.length(); // 0

stack.peek(); // Stack is empty
stack.length(); // 0

stack.pop(); // underflow
stack.length(); // 0

stack.push(40);
stack.push(50);

stack.peek(); // 50
stack.length(); // 2
stack.print(); // [40,50]