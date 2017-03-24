class Node {
   constructor(data, left, right) {
      this.data = data;
      this.left = left;
      this.right = right;
   }

   show() {
      return this.data;
   }
}

class BST {
   constructor() { 
     this.root = null;
   }

   insert(data) {
      const n = new Node(data, null, null);
      if (this.root == null) {
         this.root = n;
      }
      else {
         let current = this.root;
         let parent;
         while (true) {
            parent = current;
            if (data < current.data) {
               current = current.left;
               if (current == null) {
                  parent.left = n;
                  break;
               }
            }
            else {
               current = current.right;
               if (current == null) {
                  parent.right = n;
                  break;
               }
            }
         }
      }
   }

   inOrder(node) {
      if (!(node == null)) {
         this.inOrder(node.left);
         console.log(node.show());
         this.inOrder(node.right);
      }
   }

   preOrder(node) {
      if (!(node == null)) {
         console.log(node.show());
         this.preOrder(node.left);
         this.preOrder(node.right);
      }
   }

   postOrder(node) {
      if (!(node == null)) {
         this.postOrder(node.left);
         this.postOrder(node.right);
         console.log(node.show());
      }
   }

   getMin() {
      let current = this.root;
      while (!(current.left == null)) {
         current = current.left;
      }
      return current.data;
   }

   getMax() {
      let current = this.root;
      while (!(current.right == null)) {
         current = current.right;
      }
      return current.data;
   }

   find(data) {
      let current = this.root;
      while (current.data != data) {
         if (data < current.data) {
            current = current.left;
         }
         else {
            current = current.right;
         }
         if (current == null) {
            return null;
         }
      }
      return current;
   }
}

const nums = new BST();
nums.insert(15);
nums.insert(10);
nums.insert(20);
nums.insert(8);
nums.insert(12);
nums.insert(17);
nums.insert(25);
console.log(`Inorder traversal: `);
nums.inOrder(nums.root);
console.log(`***********************`);
console.log(`preOrder traversal: `);
nums.preOrder(nums.root);
console.log(`***********************`);
console.log(`postOrder traversal: `);
nums.postOrder(nums.root);
const min = nums.getMin();
console.log(`The minimum value of the BST is: ${min}\n`);
const max = nums.getMax();
console.log(`The maximum value of the BST is: ${max}`);
const found = nums.find(process.argv[2]);
if (found != null) {
   console.log(`Found ${process.argv[2]} in the BST.`);
}
else {
   console.log(`${process.argv[2]} was not found in the BST.`);
}