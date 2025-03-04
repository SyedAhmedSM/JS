/* Given a number (1-7), return the corresponding day of the week.

Problem Statement:
Write a function that uses switch-case to return the day name for valid inputs otherwise "Invalid
Day". */

// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
  // Return the corresponding day of the week based on the input number
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid Day";
  }
}

//sample usage
console.log(getDayOfWeek(1)); // "Monday"
console.log(getDayOfWeek(4)); // "Thursday"
console.log(getDayOfWeek(8)); // "Invalid Day"
console.log(getDayOfWeek(0)); // "Invalid Day"
