//simple stack class
class Stack {
  array = [];
  push(x) {
    this.array.push(x);
  }
  pop() {
    return this.array.pop;
  }
  peek() {
    return this.array[this.array.length - 1];
  }
}
