class BinaryTree{
  constructor(value){
    this.value = value; // Makes a node
    this.left = null; // edge to the left node
    this.right = null; //edge to the right node
  }

  getRootValue(){
    return this.value;
  }
  
  setRootValue(value){
    this.value = value;
  }

  insertLeft(value){
    this.left = new BinaryTree(value)// replaces the null value with a new subtree in the left pointer 
    return this.left
  }

  insertRight(value){
    this.right = new BinaryTree(value)// replaces the null value with a new subtree in the right pointer 
    return this.right;
  }

  getLeftChildValue(){ 
    return this.left.value;
  }

  getRightChildValue(){
    return this.right.value;
  }
}

const root = new BinaryTree(4);

// root.left.left.insertLeft(8);

// function insertNewNode(node, value){
//   //code
// }







class BinarySearchTree{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(newValue) {
    
    const newSubtree = new BinarySearchTree(newValue)
    if (!this.value) {
      this.value = newSubtree;
      return this;
    } 

    let current = this.value;
    let currentNode = this
    while (true) {
      if (newValue === current) return undefined;
      if(newValue < current) {
        if(!currentNode.left) {
          currentNode.left = newSubtree;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newSubtree;
          return this;
        }
      }
    }
  }
}

const bst = new BinarySearchTree(55);

const leftNode = bst.insert(25);

