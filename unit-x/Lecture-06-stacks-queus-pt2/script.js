let arr = [1, 23, 4, 5]
class BabyStack {
  constructor(stack = []){
    this.stack = stack;
  }
  push(element){
    this.stack.push(element)
  }
  pop(){
    this.stack.pop()
  }
  peek(){
    return this.stack[this.stack.length-1];
  }
}
const babyStack = new BabyStack();


class GrownStack {
  constructor(stack = [], length = 0){
    this.stack = stack;
    this.length = length;
  }
  push(element){
    this.stack[this.length] = element
    this.length++
    return `${element} added`
  }
  pop(){
    if(!this.length) {
      return undefined;
    }
    const removed = this.stack[this.length-1];
    this.length--
    return removed;
  }
  peek(){
    return this.stack[this.length-1];
  }
  print(){
    for(let i = 0; i < this.length; i++ ){
      console.log(this.stack[i]);
    }
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }
}
const grownStack = new GrownStack();

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    return this.queue.unshift(value);
  }
  dequeue() {
    return this.queue.pop();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
}



