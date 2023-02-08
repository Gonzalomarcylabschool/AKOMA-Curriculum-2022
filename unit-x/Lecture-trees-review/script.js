class BinarySearchTree{
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(newValue) {
    const newSubtree = new BinarySearchTree(newValue)
    if (!this.value) { // looked back and this is the best solution
      this.value = newSubtree;
      return this;
    } 

    let currentNode = this // Declare a variable that will be the pointer to the node that we are in.
    while (true) {
      if (newValue === currentNode.value) {//Check to see if the value is === to the value of the current node
        return this;
      }
      if(newValue < currentNode.value) { // Check to see if the value is less than the value of the current node
        if(!currentNode.left) {// Check to see if there is a value to the left
          currentNode.left = newSubtree;// Add the new node here
          return this;
        }
        currentNode = currentNode.left; // Move on to the next node
      } else { //if the value is greater than the value of the current node
          if(!currentNode.right) { //Check to see if there is a value to the
            currentNode.right = newSubtree; //Add the new node here
            return this;
          } else {
          currentNode = currentNode.right;// // Move on to the next node
        }
      }
    }
  }
  find(target){
    if (!this.value){
      false
    }
    let currentNode = this;
    let found = false;
    while(currentNode && !found) {
      if(target < currentNode.value){
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode
      }
    }
    return undefined;
  }
}

const bst = new BinarySearchTree(55);

bst.insert(25);
bst.insert(300);
bst.insert(200);
bst.insert(75);
bst.insert(30);
bst.insert(15);
bst.insert(24);
bst.insert(325);

function isUnivalTree(node){
  //check to see if the node that is passed in does not have children which then makes it UniValue. This is our base case.

  //Declare a variable the will hold a boolean if the left match the root node.
  //Declare a variable the will hold a boolean if the right match the root node.

  //Check to see if there is a left node
     //store in the variable the boolean by evaluating if the root is equal to the left node
  
  //Check to see if there is a right node
     //store in the variable the boolean by evaluating if the root is equal to the right node
  //if there is no left node
    //return the variable that hold the boolean for the right and invoke isUnivalTree on the right node
  
   //if there is no right node
    //return the variable that hold the boolean for the left and invoke isUnivalTree on the left node

  //return the variable that hold the boolean for the left and the right and invoke isUnivalTree on the left and on the right
}

//refactor
function isUnivalTree(node){
  //return the helper function which take in the node and the value of the node
}

function isUnivalTreeHelper(node, value) { //declare the helper function that take in the node and the value of the node.
  // if the node is null
     //return true this is the base case
  
   // if the node value is not equal to the value
    //return false
  
  //check the left node and the right node recursively
}

function invert(node){ 
  // check to see the left and right node are not null // this is the base case
    // declare a variable to store to the left
    // store the value returned by invoking function with the right node into the left node
    // store the value returned by invoking function with the left node into the right node
  
  //return the node
}


function secondMinimumNode(node){
  //base case: if the node is null or  there is no left and right node
    //return -1
    if (!node ||(!node.left && !node.right)){
      return -1;
    }
    let left = node.left.value;
    let right = node.right.value;
  // store the left value of the node
  //store the right value of the node

  //if the left value is === to the node value
    // invoke the function on the left node and store the value that is returned in to the 'left' variable
    if (left === node.value) {
      left = secondMinimumNode(node.left);
    }
  //if the left value is === to the node value
    //invoke the function on the right node and store the value that is returned in to the 'right' variable
    if(right === node.value){
      right = secondMinimumNode(node.right);
    }

    if(left !== -1 && right !== -1) {
      return Math.min(left,right)
    }

    if(left !== -1) {
      return left
    }
    else {
      return right
    }
  //if the left and right variable are not -1 
    //return the low est value (what method can we use here)
  //check to see if the 'left' is not -1
    // return left 
   //else 
    //return right;
  
}