// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null).map(() => []);
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
}

const hashMap = new HashMap();

console.log(hashMap.hash('Karim'));
