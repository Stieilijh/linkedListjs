import Node from "./Node";

export default class LinkedList {
  #size = 0;
  #head = null;
  constructor() {}
  //adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    this.#size++;
    if (this.#head === null) {
      this.#head = newNode;
      return;
    }
    let currentPointer = this.#head;
    while (currentPointer.next != null) {
      currentPointer = currentPointer.next;
    }
    currentPointer.next = newNode;
  }
  //adds a new node containing value to the start of the list
  prepend(value) {}
  //returns the total number of nodes in the list
  size() {
    return this.#size;
  }
  //returns the first node in the list
  head() {
    return this.#head.getValue();
  }
  //returns the last node in the list
  tail() {
    let currentPointer = this.#head;
    while (currentPointer.next != null) {
      currentPointer = currentPointer.next;
    }
    return currentPointer.getValue();
  }
  //returns the node at the given index
  at(index) {}
  //removes the last element from the list
  pop() {}
  /*returns true if the passed in value is in the list and otherwise returns
   false.*/
  contains(value) {}
  //returns the index of the node containing value, or null if not found.
  find(value) {}
  /*represents your LinkedList objects as strings, so you can print them out 
  and preview them in the console.
  The format should be: ( value ) -> ( value ) -> ( value ) -> null*/
  toString() {}
  /*Inserts a new node with the provided value at the given index.*/
  insertAt(value, index) {}
  /*that removes the node at the given index.*/
  removeAt(index) {}
}