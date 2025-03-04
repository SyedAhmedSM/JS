/* You are organizing a party and have a list of invited guests. But just before the party starts, a new
friend decides to join. You need to add them to the guest list.

Problem Statement: Create a function that adds a new guest to the guest list and returns the
updated list. */

function checkEvenOddusingternary(num) {
  // Return "Even" if num is even, otherwise return "Odd"
  return num % 2 === 0 ? "Even" : "Odd";
}

function checkEvenOddusingif(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//sample usage
console.log(checkEvenOddusingternary(5)); // "Odd"
console.log(checkEvenOddusingif(10)); // "Even"
