# Trees pt 3 / review

## isUnivalTree

```js
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
```

<details><summary>Solution</summary>

```js
function isUnivalTree(node){
  if (!node.left && !node.right) {
    return true;
  }

  let leftMatches;
  let rightMatches;
  if (node.left) {
    leftMatches = node.value === node.left.value;
  }
  if (node.right) {
    rightMatches = node.value === node.right.value;
  }
  if (!node.left) {
    return rightMatches && isUnivalTree(node.right);
  }
  if (!node.right) {
    return leftMatches && isUnivalTree(node.left);
  }

  return leftMatches && rightMatches && isUnivalTree(node.left) && isUnivalTree(node.right)
}
```

</details>

## isUnivalTree refactor

```js
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
```

<details><summary>Solution</summary>

```js
function isUnivalTree(node){
  return isUnivalTreeHelper(node, node.value);
}

function isUnivalTreeHelper(node, value) {
  if (!node) {
    return true;
  }
  if (node.value !== value) {
    return false;
  }
  return isUnivalTreeHelper(node.left, value) && isUnivalTreeHelper(node.right, value);
}
```

</details>


## invert

```js
function invert(node){ 
  // check to see the left and right node are not null // this is the base case
    // declare a variable to store to the left
    // store the value returned by invoking function with the right node into the left node
    // store the value returned by invoking function with the left node into the right node
  
  //return the node
}
```

<details><summary>Solution</summary>

```js
if (node.left && node.right){ //
    let left = node.left;
    node.left = invert(node.right);
    node.right = invert(left);
  }
  return node;
```

</details>

## secondMinimumNode

```js
function secondMinimumNode(node){
  //base case: if the node is null or  there is no left and right node
    //return -1
  

  // store the left value of the node
  //store the right value of the node
  //if the left value is === to the node value
    // invoke the function on the left node and store the value that is returned in to the 'left' variable
  
  //if the left value is === to the node value
    //invoke the function on the right node and store the value that is returned in to the 'right' variable
  
  //if the left and right variable are not -1 
    //return the low est value (what method can we use here)
  //check to see if the 'left' is not -1
    // return left 
   //else 
    //return right;
  
}
```

<details><summary>Solution</summary>

```js
function secondMinimumNode(node){
  if (!node || (!node.left && !node.right )) {
    return -1;
  }

  let left = node.left.value;
  let right = node.right.value;
  if (left === node.value) {
    left = findSecondMinimumValue(node.left);
  }
  if (right === node.value) {
    right = findSecondMinimumValue(node.right);
  }
  if (left !== -1 && right !== -1) {
    return Math.min(left, right);
  } else if (left !== -1) {
    return left;
  } else {
    return right;
  }
}
```

</details>
