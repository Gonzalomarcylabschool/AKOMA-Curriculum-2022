# Trees pt 1

## What is a tree... IRL?

![picture of tree](https://static.sciencelearn.org.nz/images/images/000/003/586/embed/TREES_ART_03_What_is_a_tree_PartsOfTree.jpeg?1674171276)

There is a root, a trunk and branches. But at each branch something happens. They start to split off. 

A tree is a data structure that is composed of nodes connected by edges. Each node in a tree represents a data element and can have zero or more child nodes, which are connected to it by edges. The topmost node in a tree is known as the root, and the nodes that have no children are called leaf nodes. Paths are sequences of edges that connect nodes in a tree, and the length of a path is equal to the number of edges it contains.

The tree and its subtrees are connected by edges, which are used to navigate from the root node to any other node in the tree. In this way, a tree can be defined in terms of itself, making it a recursive data structure.

## Tree are non-linear.

The data in a tree are not stored in a sequential manner i.e, they are not stored linearly unlink linked list, stacks, queues. Instead, they are arranged on multiple levels or we can say it is a hierarchical structure. For this reason, the tree is considered to be a non-linear data structure.

## Properties of a Tree:
 
 ![properties of a tree data structure](https://media.geeksforgeeks.org/wp-content/uploads/20221124153129/Treedatastructure.png)

*Root*: The topmost node in a tree is called the root.

*Nodes*: Each point in a tree is called a node.

*Parent-Child Relationship*: Each node in a tree, except the root, has one parent node and zero or more child nodes.

*Edge*: The connection between a parent node and a child node is called an edge.

*Number of edges*: An edge can be defined as the connection between two nodes. If a tree has N nodes then it will have (N-1) edges. There is only one path from each node to any other node of the tree.

*Depth of a node*: The depth of a node is defined as the length of the path from the root to that node. Each edge adds 1 unit of length to the path. So, it can also be defined as the number of edges in the path from the root of the tree to the node.

*Height of a node*: The height of a node can be defined as the length of the longest path from the node to a leaf node of the tree.

*Height of the Tree*: The height of a tree is the length of the longest path from the root of the tree to a leaf node of the tree.

*Degree of a Node*: The total count of subtrees attached to that node is called the degree of the node. The degree of a leaf node must be 0. The degree of a tree is the maximum degree of a node among all the nodes in the tree.

Some more properties are:

Traversing in a tree is done by depth first search and breadth first search algorithm.
It has no loop and no circuit
It has no self-loop 
Its hierarchical model.

## Where do we see trees?

A File directory:

![visual representation of a file directory](https://images.ctfassets.net/lzny33ho1g45/3XCWEI9wGNPKDyD6oDCg7l/d0f4d2c31bf4768502464c68eb5cccb0/example_folder_structure_flow_chart?w=1400)

HTML DOM:

![visual representation of the DOM](https://www.toolsqa.com/gallery/JavaScript/1.Sample%20DOM%20structure.png)

## So what is a Binary Tree

A binary tree is a type of tree data structure where each node has at most two child nodes. In other words, each node in a binary tree has either zero, one, or two children. This differs from a regular tree, where each node can have any number of children. 

Binary trees have many useful properties and are used in various algorithms, including search algorithms, sorting algorithms, and tree traversals. The restriction to at most two children per node makes binary trees easier to analyze and manipulate than regular trees, and they are more commonly used in computer science and engineering than regular trees.

```js
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
```

## Binary Search tree

A Binary Search Tree (BST) is a data structure in which each node has a value and two children nodes, with the constraint that the left child node must have a value less than the parent node and the right child node must have a value greater than the parent node. This structure allows for efficient searching, insertion, and deletion operations as each node acts as a pivot, reducing the number of nodes to traverse.

![infograph on binary serch tree](https://www.guru99.com/images/1/020820_0600_BinarySearc1.png)

The following are not binary search:

![](https://iq.opengenus.org/content/images/2019/05/BST.png)

Why does this one work on both sides?

![](https://www.codesdope.com/staticroot/images/ds/bst2.png)