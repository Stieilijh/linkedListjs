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
  prepend(value) {
    const newNode = new Node(value, this.#head);
    this.#size++;
    this.#head = newNode;
  }
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
  //returns the node at the given index and returns null if the index has no nodes
  at(index) {
    if (index > this.#size || index < 0) return null;
    let currentPointer = this.#head;
    while (index > 0) {
      currentPointer = currentPointer.next;
      index--;
    }
    return currentPointer.getValue();
  }
  //removes the last element from the list
  pop() {
    let currentPointer = this.#head;
    while (currentPointer.next.getValue() != this.tail()) {
      currentPointer = currentPointer.next;
    }
    currentPointer.next = null;
    this.#size--;
  }
  /*returns true if the passed in value is in the list and otherwise returns
   false.*/
  contains(value) {
    let currentPointer = this.#head;
    while (currentPointer.next != null) {
      if (currentPointer.getValue() == value) return true;
      currentPointer = currentPointer.next;
    }
    if (currentPointer.getValue() == value) return true;
    return false;
  }
  //returns the index of the node containing value, or null if not found.
  find(value) {
    for (let i = 0; i < this.#size; i++) {
      if (this.at(i) === value) {
        return i;
      }
    }
    return null;
  }
  /*represents your LinkedList objects as strings, so you can print them out 
  and preview them in the console.
  The format should be: ( value ) -> ( value ) -> ( value ) -> null*/
  toString() {
    let str = "";
    let currentPointer = this.#head;
    while (currentPointer.next != null) {
      str += " ( " + currentPointer.getValue() + " ) -> ";
      currentPointer = currentPointer.next;
    }
    str += " ( " + currentPointer.getValue() + " ) -> null ";
    return str;
  }
  /*Inserts a new node with the provided value at the given index.*/
  insertAt(value, index) {
    if (index < 0)
      throw new Error("Index cannot be less than 0 for insert method");
    else if (index > this.#size)
      throw new Error(
        `Index cannot be more than ${this.#size} for insert method`
      );
    const newNode = new Node(value, this.#findNode(index));
    this.#size++;
    if (index === 0) {
      this.#head = newNode;
      return;
    }
    this.#findNode(index - 1).next = newNode;
  }
  /*that removes the node at the given index.*/
  removeAt(index) {
    if (index < 0)
      throw new Error("Index cannot be less than 0 for remove method");
    else if (index > this.#size)
      throw new Error(
        `Index cannot be more than ${this.#size} for remove method`
      );

    if (index === 0) {
      this.#head = this.#findNode(1);
      this.#size--;
      return;
    }
    if (index === this.#size) {
      this.pop();
      return;
    }
    this.#findNode(index - 1).next = this.#findNode(index + 1);
    this.#size--;
  }
  //Find Node at index
  #findNode(index) {
    let currentPointer = this.#head;
    while (index > 0) {
      currentPointer = currentPointer.next;
      index--;
    }
    return currentPointer;
  }
}
