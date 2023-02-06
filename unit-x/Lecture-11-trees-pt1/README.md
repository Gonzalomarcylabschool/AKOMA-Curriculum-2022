# Trees pt 1

## What is a tree... IRL?

![picture of tree](https://static.sciencelearn.org.nz/images/images/000/003/586/embed/TREES_ART_03_What_is_a_tree_PartsOfTree.jpeg?1674171276)

There is a root, a trunk and branches. But at each branch something happens. They start to split off. 



A tree is a data structure that is composed of nodes connected by edges. Each node in a tree represents a data element and can have zero or more child nodes, which are connected to it by edges. The topmost node in a tree is known as the root, and the nodes that have no children are called leaf nodes. Paths are sequences of edges that connect nodes in a tree, and the length of a path is equal to the number of edges it contains.

The tree and its subtrees are connected by edges, which are used to navigate from the root node to any other node in the tree. In this way, a tree can be defined in terms of itself, making it a recursive data structure.

## Tree are non-linear.

The data in a tree are not stored in a sequential manner i.e, they are not stored linearly unlink linked list, stacks, queues. Instead, they are arranged on multiple levels or we can say it is a hierarchical structure. For this reason, the tree is considered to be a non-linear data structure.

## Properties of a Tree:
 
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