/* Problem Statement

In your web application, some objects contain unnecessary properties. To optimize performance,
you need to remove all properties that have null or undefined values.

Challenge

Write a function that removes all properties with null or undefined values from an object.

Constraints

· The input should be a valid object.
. If the object has no valid properties left, return {} */

// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  let cleanedObj = {};
  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      cleanedObj[key] = obj[key];
    }
  }
  return cleanedObj;
}

//sample input
console.log(
  cleanObject({ name: "Syed", age: 36, email: null, address: undefined })
);
