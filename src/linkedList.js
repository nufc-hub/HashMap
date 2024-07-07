import Node from './node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node containing -value- to the end of the list.
  append(key, value) {
    const newNode = new Node(key, value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }
  }

  // Adds a new node containing -value- to the start of the list.
  prepend(key, value) {
    this.head = new Node(key, value, this.head);
  }

  // Returns the total number of nodes in the list
  size() {
    let listSize = 0;
    let current = this.head;

    while (current !== null) {
      listSize++;
      current = current.nextNode;
    }
    return listSize;
  }

  // Returns the first node in the list.
  getHead() {
    return this.head;
  }

  // Returns the last node in the list.
  getTail() {
    if (this.head === null) {
      return this.head;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // Returns the node at the given index
  at(index) {
    if (index < 0 || this.head === null) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;

      while (current !== null && counter < index) {
        current = current.nextNode;
        counter++;
      }

      return current;
    }
  }

  // Removes the last element from the list
  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  // Returns true if the passed in key is in the list, otherwise returns false.
  contains(key) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    while (current !== null) {
      if (current.key === key) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  // Returns the node containing key, or null if not found.
  find(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        return current;
      }
      current = current.nextNode;
    }
    return null;
  }
  // Returns an array containing all keys in the list.

  getAllKeys() {
    let current = this.head;
    let keys = [];

    while (current !== null) {
      keys.push(`Key: ${current.key}, `);
      current = current.nextNode;
    }
    return keys;
  }

  // Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  toString() {
    if (this.head === null) {
      return 'null';
    }

    let current = this.head;
    let string = '';

    while (current !== null) {
      string += `${current.key}, ${current.value} -> `;
      current = current.nextNode;
    }

    string += 'null';
    return string;
  }
  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(key, value, index) {
    const newNode = new Node(key, value);

    if (index < 0) {
      return;
    }

    if (this.head === null) {
      if (index === 0) {
        this.head = newNode;
      } else {
        console.log(`Index ${index} is out of bounds for an empty list.`);
      }
      return;
    }

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let counter = 0;

    while (current !== null && counter < index) {
      previous = current;
      current = current.nextNode;
      counter++;
    }

    if (counter === index) {
      newNode.nextNode = current;
      if (previous !== null) {
        previous.nextNode = newNode;
      }
    } else {
      console.log(`Index ${index} is out of bounds.`);
    }
  }

  // removeAtIndex(index) that removes the node at the given index.
  removeAtIndex(index) {
    if (index < 0) {
      return;
    }

    if (this.head === null) {
      console.log(`Index ${index} is out of bounds for an empty list.`);
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let counter = 0;

    while (current !== null && counter < index) {
      previous = current;
      current = current.nextNode;
      counter++;
    }

    if (current === null) {
      console.log(`Index ${index} is out of bounds.`);
    } else if (counter === index) {
      previous.nextNode = current.nextNode;
    }
  }

  // removeAtKey(key) that removes the node at the given key.
  removeAtKey(key) {
    if (this.head === null) {
      console.log(`Key: ${key}, does not exist in an empty list.`);
      return false;
    }

    if (this.head.key === key) {
      this.head = this.head.nextNode;
      return true;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.key !== key) {
      previous = current;
      current = current.nextNode;
    }

    if (current === null) {
      console.log(`Key: ${key}, does not exist in this list.`);
      return false;
    }

    previous.nextNode = current.nextNode;
    return true;
  }

  // Deletes all nodes in a list.
  deleteAll() {
    this.head = null;
  }
}

export default LinkedList;
