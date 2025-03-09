/* You lost your phone in a list of items. Find the index of "Phone".

Problem Statement: Create a function that finds the index of "Phone" in the list of items and
returns the index. */

// You just need to implement the findPhone function
function findPhone(items) {
  // Return the index of "Phone" in the items array
  return items.indexOf("Phone");
}

// Sample usage
console.log(findPhone(["Table", "Chair", "Phone", "Watch"])); // 2
console.log(findPhone(["Table", "Chair", "Watch", "Phone"])); // 3
