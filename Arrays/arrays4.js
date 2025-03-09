/* A school bus has students inside, but the first student in line needs to get off at the next stop.
Remove the first student from the bus.

Problem Statement: Create a function that removes the first student from the bus and returns the
updated list. */

// You just need to implement the removeStudent function
function removeStudent(bus) {
  // Remove the first student and return the updated bus list
  return bus.slice(1);
}

function removeStudentusingshift(bus) {
  bus.shift();
  return bus;
}

//sample usage
console.log(removeStudent(["Steve", "Mike", "John"])); //["Mike", "John"]
console.log(removeStudent(["Steve"])); //[]
console.log(removeStudentusingshift(["Steve", "Mike", "John", "Doe"])); //["Mike", "John", "Doe"]
