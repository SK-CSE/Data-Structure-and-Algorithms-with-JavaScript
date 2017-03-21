function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
}

function show() {
   return this.data;
}

function BST() { 
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find  = find;

}

function insert(data) {
   var n = new Node(data, null, null);
   if (this.root == null) {
      this.root = n;
   }
   else {
      var current = this.root;
      var parent;
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


function inOrder(node) {
   if (!(node == null)) {
      inOrder(node.left);
      console.log(node.show());
      inOrder(node.right);
   }
}

function preOrder(node) {
   if (!(node == null)) {
      console.log(node.show());
      preOrder(node.left);
      preOrder(node.right);
   }
}

function postOrder(node) {
   if (!(node == null)) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show());
   }
}

function getMin() {
   var current = this.root;
   while (!(current.left == null)) {
      current = current.left;
   }
   return current.data;
}

function getMax() {
   var current = this.root;
   while (!(current.right == null)) {
      current = current.right;
   }
   return current.data;
}

function find(data) {
   var current = this.root;
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

var nums = new BST();
nums.insert(15);
nums.insert(10);
nums.insert(20);
nums.insert(8);
nums.insert(12);
nums.insert(17);
nums.insert(25);
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("***********************");
console.log("preOrder traversal: ");
preOrder(nums.root);
console.log("***********************");
console.log("postOrder traversal: ");
postOrder(nums.root);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
console.log("\n");
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);
var found = nums.find(process.argv[2]);
if (found != null) {
   console.log("Found " + process.argv[2] + " in the BST.");
}
else {
   console.log(process.argv[2] + " was not found in the BST.");
}
