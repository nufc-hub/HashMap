import LinkedList from './linkedList.js';

class HashSet {
  constructor() {
    this.buckets = new Array(16).fill(null).map(() => new LinkedList());
    this.loadFactor = 0.75;
    // Capacity double each time there is a resize.
    this.capacity = this.buckets.length;
    // Size increases each time a new key is set. Decreases if key deleted.
    this.size = 0;
  }

  // hash(key) takes a key and produces a hash code with it.
  hash(key) {
    let hashCode = 0;

    let primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  // set(key) takes a single argument.
  // If a key already exists, it is not added again.
  // Creates a head node in a new element
  // If there is a hash collision a linked list is created.
  set(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }

    // If a key already exists, return.
    const node = bucket.find(key);
    if (node) {
      console.log(`Key: ${key}. This key already exists.`);
      return;
    } else {
      // If a key does not exist. Add it.
      bucket.append(key);
      this.size++;
    }

    if (this.size / this.capacity > this.loadFactor) {
      this.resize();
    }
    // Grow bucket when need to. When bucket size has reached the load factor.
  }

  resize() {
    // Determine the New Size: Typically, the new size is a multiple (often double) of the current size.
    this.capacity = this.capacity * 2;
    const newBuckets = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());

    // Rehashing: All existing entries are rehashed to map them to new bucket indices based on the new size of the array.
    for (let i = 0; i < this.buckets.length; i++) {
      // Get the key.
      let current = this.buckets[i].head;
      while (current !== null) {
        const newIndex = this.hash(current.key);
        newBuckets[newIndex].append(current.key);
        current = current.nextNode;
      }
    }
    // Reassign Entries: Entries are moved to the new bucket array to reflect the updated hash keys.
    this.buckets = newBuckets;
  }

  // get(key) takes one argument as a key and returns the key. If a key is not found, return null.
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const node = bucket.find(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    if (node) {
      return node.key;
    }

    return null;
  }

  // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    return bucket.contains(key);
  }

  // remove(key) takes a key as an argument.
  // If the given key is in the hash map, it should remove the entry with that key and return true.
  // If the key isn’t in the hash map, it should return false.

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    const result = bucket.removeAtKey(key);

    if (result) {
      this.size--;
      return true;
    }

    return false;
  }

  // length() returns the number of stored keys in the hash map.
  length() {
    let hashLength = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      const bucketLength = bucket.size();
      hashLength += bucketLength;
    }

    return hashLength;
  }

  // clear() removes all entries in the hash map.
  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      bucket.deleteAll();
    }
  }

  // keys() returns an array containing all the keys inside the hash map.
  keys() {
    let allKeys = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      const key = bucket.getAllKeys();
      allKeys = allKeys.concat(key);
    }

    return allKeys;
  }
}

export default HashSet;
