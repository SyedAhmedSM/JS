/* Create a basic calculator that performs +, -,*, / based on user input.

Problem Statement:
Write a function that uses switch-case to perform arithmetic operations. Handle the edge case of
"Cannot divide by zero". */

// You just need to implement the calculator function
function calculator(num1, num2, operator) {
  // Perform basic arithmetic operations using switch case
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

//sample usage
console.log(calculator(2, 3, "+")); //expected output: 5
console.log(calculator(2, 3, "-")); //expected output: -1
console.log(calculator(2, 3, "*")); //expected output: 6
console.log(calculator(2, 3, "/")); //expected output: 0.6666666666666666
console.log(calculator(2, 0, "/")); //expected output: Cannot divide by zero
