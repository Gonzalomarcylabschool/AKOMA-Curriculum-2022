const node1 = {//node
    data: 1 //data
  };
  
  const node2 = {
    data: 2
  };
  
  const node3 = {
    data: 3
  };
  console.log(node1);
  
  node1.next = node2;//pointer
  node2.next = node3;
  node3.next = null
  
  //Why don't we put the pointer in the object?
//   const no = {
//     data: 1,
//     next: no2
//   };
  
//   const no2 = {
//     data: 1,
//     node: no3
//   };
  
//   const no3 = {
//     data: 1,
//     next: null
//   };
  
  
//   node1.next = node2;
//   node2.next = node3;
//   node3.next = null
  
  
  
  // const n3 = { // node
  //   data: 300, // data
  //   next: null // pointer
  // }
  // const n2 = {// node
  //   data: 200, //data
  //   next: n3 // pointer
  // }
  // const n1 = {//node
  //   data: 100, //data
  //   next: n2 // pointer
  // };
  
  
  
  // console.log(n1);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}