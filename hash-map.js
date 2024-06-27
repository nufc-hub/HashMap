// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class HashMap {
  constructor(bucketSize = 16) {
    this.bucket = new Array(bucketSize).fill(null).map(() => []);
  }

  hash(key, bucketSize) {
    let hashCode = 0;

    let primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketSize;
    }

    return hashCode;
  }
}

const hashMap = new HashMap();

console.log(hashMap.hash('karim', 13));
