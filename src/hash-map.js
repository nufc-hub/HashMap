// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

import LinkedList from './linkedList.js';

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null).map(() => new LinkedList());
  }

  // hash(key) takes a key and produces a hash code with it.
  hash(key) {
    let hashCode = 0;

    let primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  // set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key.
  // If a key already exists, then the old value is updated.
  // Creates a head node in a new element
  // If there is a hash collision a linked list is created.
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    const node = bucket.find(key);
    if (node) {
      node.value = value;
    } else {
      bucket.append(key, value);
    }

    console.log(this.buckets);
    // Grow bucket when need to. When bucket size has reached the load factor.
  }

  // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const node = bucket.find(key);

    if (node) {
      return node.value;
    } else {
      return null;
    }
  }

  // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    return bucket.contains(key);
  }

  // remove(key) takes a key as an argument.
  // If the given key is in the hash map, it should remove the entry with that key and return true.
  // If the key isn’t in the hash map, it should return false.

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const result = bucket.removeAtKey(key);

    if (result) {
      this.size--;
    }

    console.log('Updated Bucket after removal:', bucket);

    return result;
  }

  // length() returns the number of stored keys in the hash map.
  length() {
    let hashLength = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      console.log(bucket);
      const bucketLength = bucket.size();
      console.log(bucketLength);

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

export default HashMap;
