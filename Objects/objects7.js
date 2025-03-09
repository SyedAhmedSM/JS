/* Problem Statement

You are working on a system that stores product details in an object. However, for some
functionalities, the data needs to be in an array format.

Challenge

Write a function that converts an object into an array of key-value pairs. Each element in the array
should be an array where the first item is the key and the second item is the value.

Constraints

· The input should be a valid object.
. If the object is empty, return an empty array. */

// You just need to implement the objectToArray function
function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  const arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
}

function objectToArraySolution(obj) {
  return Object.entries(obj);
}

//sample input
console.log(objectToArray({ name: "Syed", age: 36 }));
console.log(objectToArraySolution({ brand: "Hyundai", model: "i20" }));
