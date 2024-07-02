// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

import LinkedList from './linkedList.js';

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;

    let primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

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
}

export default HashMap;
