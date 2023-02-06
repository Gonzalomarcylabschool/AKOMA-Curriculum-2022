class BinaryTree{
  constructor(value){
    this.value = value; // Makes a node
    this.left = null; // points to the left node
    this.right = null; //point to the right node
  }

  getRootValue(){
    // return the value of the node
  }
  
  setRootValue(value){
    //set the value of the root node
  }

  insertLeft(value){
    // replaces the null value with a new subtree in the left pointer 
    return this.left
  }

  insertRight(value){
    // replaces the null value with a new subtree in the right pointer 
    return this.right;
  }

  getLeftChildValue(){ 
    return this.left.value;
  }

  getRightChildValue(){
    return this.right.value;
  }
}

const tree = new BinaryTree(1);

// class BinarySearchTree{
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(newValue) {
//     const newSubtree = new BinarySearchTree(newValue)
//     if (!this.value) {
//       this.value = newSubtree;
//       return this;
//     } 

//     let current = this.value;
//     while (true) {
//       if (newValue === current) return undefined;
//       if(newValue < current) {
//         if(!current.left) {
//           current.left = newSubtree;
//           return this;
//         }
//         current = current.left;
//       } else {
//         if(!current.right) {
//           current.right = newSubtree;
//           return this;
//         }
//       }
//     }
//   }
// }

// const bst = new BinarySearchTree(55);

