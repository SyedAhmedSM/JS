/* Problem Statement

You are working on a system that stores user profile information from multiple sources.
Sometimes, the same user has two different records, and you need to merge them into a single
object.

Challenge

Write a function that takes two objects and merges them into one. If a key exists in both objects,
the value from the second object should overwrite the value from the first object.

Constraints

· Both inputs should be valid objects.
· If an object is empty, return the other object as it is.
. If both objects are empty, return {}. */

// You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
  // Merge obj1 and obj2 into a single object
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return {};
  } else if (Object.keys(obj1).length === 0) {
    return obj2;
  } else if (Object.keys(obj2).length === 0) {
    return obj1;
  } else {
    return { ...obj1, ...obj2 };
  }
}

//sample input
console.log(
  mergeObjects({ name: "Syed", age: 35 }, { age: 36, email: "syed@email.com" })
);
console.log({ brand: "Hyundai" }, { model: "i20" });
console.log({ name: "Syed" }, {});
console.log({}, { name: "Syed" });
console.log({}, {});
