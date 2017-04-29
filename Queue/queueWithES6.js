class Queue {
   constructor() {
      this.dataStore = [];
   }

   enqueue(element) {
      this.dataStore.push(element);
   }

   dequeue() {
      return this.dataStore.shift();
   }

   front() {
      return this.dataStore[0];
   }

   back() {
      return this.dataStore[this.dataStore.length-1];
   }

   toString() {
      let retStr = "";
      for (let i = 0; i < this.dataStore.length; ++i) {
         retStr += `${this.dataStore[i]}\n`;
      }
      return retStr;
   }

   empty() {
      if (this.dataStore.length == 0) {
         return true;
      }
      else {
         return false;
      }
   }
}

// test program
const q = new Queue();
q.enqueue("Saurabh");
q.enqueue("Anant");
q.enqueue("Sunny");
console.log(q.toString()); // Saurabh Anant Sunny
q.dequeue();
console.log(q.toString());
console.log(`Front of queue: ${q.front()}`); // Anant
console.log(`Back of queue: ${q.back()}`); // Sunny