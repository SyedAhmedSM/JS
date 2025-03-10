/* Determine if a number is positive, negative, or zero.

Problem Statement:
Write a function that uses if else to classify a number. */

// You just need to implement the checkNumberType function
function checkNumberType(num) {
  // Return "Positive", "Negative", or "Zero" based on the input number
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

//sample usage
console.log(checkNumberType(10)); // "Positive"
console.log(checkNumberType(-5)); // "Negative"
console.log(checkNumberType(0)); // "Zero"
