export default class Node {
  constructor(value = null, nextnode = null) {
    this.value = value;
    this.nextnode = nextnode;
  }
  getValue() {
    return this.value;
  }
  get next() {
    return this.nextnode;
  }
  set next(newNode = null) {
    this.nextnode = newNode;
  }
}
