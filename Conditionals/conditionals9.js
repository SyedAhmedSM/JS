/* Given a temperature and a scale ("C" or "F"), convert it to the other scale.

Problem Statement:
Write a function that uses switch-case to convert temperature. */

// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
  // Convert temperature based on the scale ("C" to "F" or "F" to "C")
  switch (scale) {
    case "C":
      return (value * 9) / 5 + 32 + "°F";
    case "F":
      return ((value - 32) * 5) / 9 + "°C";
    default:
      return "Invalid scale";
  }
}

//sample usage
console.log(convertTemperature(100, "C")); //expected output: 212°F
console.log(convertTemperature(0, "C")); //expected output: 32°F
console.log(convertTemperature(32, "F")); //expected output: 0℃
