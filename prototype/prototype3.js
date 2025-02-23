/* Problem statement

You need to create a Counter constructor function that initializes a count property to 0. The
counter should have two prototype methods:

. increment () increases the count by 1.
. decrement () decreases the count by 1.

Challenge

. Implement a constructor function Counter that initializes count to 0
. Attach increment() and decrement() methods to the prototype. */
// Solution

function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function () {
  this.count++;
  console.log(`Count incremented: ${this.count}`);
};

Counter.prototype.decrement = function () {
  this.count--;
  console.log(`Count decremented: ${this.count}`);
};

// Example usage
const counter = new Counter();
counter.increment(); // Count incremented: 1
counter.increment(); // Count incremented: 2
counter.decrement(); // Count decremented: 1
counter.increment(); // Count incremented: 2
counter.decrement(); // Count decremented: 1
