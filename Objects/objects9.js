/* Problem Statement

You are working on a web application where objects contain nested properties. JavaScript's built-
in assignment (=) creates a shallow copy, meaning changes to the copied object will also affect
the original. To prevent this, you need to create a deep copy of an object, ensuring that nested
objects are also cloned properly.

Challenge

Write a function that takes an object and returns a deep copy of it.

Constraints

· The input should be a valid object.
· The function should work with nested objects and arrays inside objects.
· The function should not modify the original object */

// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy;

  if (Array.isArray(obj)) {
    copy = [];
  } else {
    copy = {};
  }

  for (let attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = deepClone(obj[attr]);
    }
  }

  return copy;
}

function deepCloneSolution(obj) {
  // Return a deep copy of obj
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}

//sample output
console.log(
  deepClone({
    name: "Syed",
    age: 36,
    address: { city: "Ahmednagar", zip: 414001 },
  })
);
console.log(
  deepClone({
    products: [1, 2, 3, 4],
    details: { available: false },
  })
);
console.log(deepCloneSolution(null));
console.log(deepCloneSolution(undefined));
console.log(deepCloneSolution(true));
console.log(deepCloneSolution(false));
