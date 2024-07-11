import HashMap from './hashMap.js';

const test = new HashMap(); // Create a new hash map.

// Create a bunch of new nodes.
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// test.set('moon', 'silver'); will cause hash map to exceed the current load factor,
// causing the buckets to expand and growing the hash map.
test.set('moon', 'silver');

test.set('cat', 'ginger'); // Create a new node in expanded hash map.

test.set('apple', 'green'); // Overwrite value of key: 'apple'.
console.log(test.get('apple')); // Get value of key: 'apple'.
console.log(test.has('dog')); // Hash map has key: 'dog' or not.
console.log(test.has('cat')); // Hash map has key: 'cat' or not.
console.log(test.remove('grape')); // Remove key-value: 'grape' and returns true if key exists.
console.log(test.remove('grape')); // Remove key-value: 'grape' and returns false if key does not exist.
console.log(test.length()); // Returns the number of stored keys in the hash map.
console.log(test.keys()); // Displays all keys.
console.log(test.values()); // Displays all values.
console.log(test.entries()); // Displays all key-value pairs.
test.clear(); // Removes all entries from the hash map.
console.log(test.entries()); // Displays all key-value pairs.
