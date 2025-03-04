/* You are given three numbers. Determine the largest among them.

Problem Statement:
Write a function that takes three numbers and returns the largest using if-else. */

//You just need to implement the findLargest function
// You just need to implement the findLargest function
function findLargest(a, b, c) {
  // Return the largest among a, b, and c
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

//sample usage
console.log(findLargest(5, 7, 2)); //7
console.log(findLargest(9, 9, 9)); //9
