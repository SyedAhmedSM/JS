/* Problem Statement

Imagine you are building an online school management system. Each student has a profile
containing their name, age, and grade. You need to store this information in an object format so
that it can be accessed easily when required.

Challenge

Write a function that takes name, age, and grade as parameters and returns a student object
containing these properties.

Constraints

· name should be a string.
· age should be a positive integer greater than 5.
. grade should be a string like "10th", "12th", etc.
. return "Invalid input" for wrong inputs. */

// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (
    typeof name === "string" &&
    typeof age === "number" &&
    typeof grade === "string" &&
    age > 5 &&
    name !== ""
  ) {
    return {
      name: name,
      age: age,
      grade: grade,
    };
  } else {
    return "Invalid input";
  }
}

function createStudentProfilesolution(name, age, grade) {
  if (
    typeof name !== "string" ||
    typeof grade !== "string" ||
    typeof age !== "number" ||
    age <= 5 ||
    name === ""
  ) {
    return "Invalid input";
  }

  return { name, age, grade };
}

//sample input
console.log(createStudentProfile("John", 10, "5th")); // { name: 'John', age: 10, grade: '5th' }
console.log(createStudentProfile("John", 10, 5)); // Invalid input
console.log(createStudentProfile("", 12, "7th")); // Invalid input
