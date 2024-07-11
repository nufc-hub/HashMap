import HashSet from './hashSet.js';

const test = new HashSet(); // Create a new hash set.

// Create a bunch of new nodes.
test.set('apple');
test.set('banana');
test.set('carrot');
test.set('dog');
test.set('elephant');
test.set('frog');
test.set('grape');
test.set('hat');
test.set('ice cream');
test.set('jacket');
test.set('kite');
test.set('lion');

// // test.set('moon'); will cause hash set to exceed the current load factor,
// // causing the buckets to expand and growing the hash set.
test.set('moon');

test.set('cat'); // Create a new node in expanded hash map.

test.set('apple'); // Check console message for when a key already exists.
console.log(test.get('apple')); // Gets the key and returns node.key.
console.log(test.has('dog')); // Hash map has key: 'dog' or not.
console.log(test.has('cat')); // Hash map has key: 'cat' or not.
console.log(test.remove('grape')); // Remove key: 'grape' and returns true if key exists.
console.log(test.remove('grape')); // Remove key: 'grape' and returns false if key does not exist.
console.log(test.length()); // Returns the number of stored keys in the hash map.
console.log(test.keys()); // Displays all keys.
test.clear(); // Removes all keys from the hash map.
console.log(test.keys()); // Displays all keys.
