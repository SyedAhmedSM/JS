/* Problem Statement

You are analyzing user data in a database. You need to count how many properties exist in a
user's profile to determine if the profile is complete.

Challenge

Write a function that returns the number of properties in an object.

Constraints

· user should be a valid object.
· If the object is empty, return 0. */

// You just need to implement the countProperties function
function countProperties(user) {
  // Return the number of properties in user
  return Object.keys(user).length;
}

//sample input
console.log(countProperties({ username: "Sam", password: "123abc" })); // 2
console.log(countProperties({ username: "Sam" })); // 1
console.log(countProperties({})); // 0
