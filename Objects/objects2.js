/* Problem Statement

You are developing a car rental service. Each car has a brand and model, but some cars don't have
a color assigned yet. You need to add a color property dynamically when a customer selects a car.

Challenge

Write a function that takes a car object and a color string, then adds the color property to the
object.

Constraints

. car should be a valid object with at least brand and model properties.
. color should be a non-empty string, otherwise return "Invalid color". */

// You just need to implement the addCarColor function
function addCarColor(car, color) {
  // Add color property to the car object
  if (
    typeof car === "object" &&
    car !== null &&
    car.hasOwnProperty("brand") &&
    car.hasOwnProperty("model") &&
    typeof color === "string" &&
    color !== ""
  ) {
    car.color = color;
    return car;
  } else {
    return "Invalid color";
  }
}

function addCarColorSolution(car, color) {
  if (
    typeof car !== "object" ||
    typeof color !== "string" ||
    color.length === 0
  ) {
    return "Invalid color";
  } else {
    car.color = color;
    return car;
  }
}

//sample input
console.log(addCarColor({ brand: "Toyota", model: "Corolla" }, "Red")); // { brand: 'Toyota', model: 'Corolla', color: 'Red' }
console.log(addCarColor({ brand: "Toyota" }, "Red")); // Invalid color
console.log(addCarColor({ brand: "Toyota", model: "Corolla" }, "")); // Invalid color
console.log(addCarColorSolution({ brand: "Toyota", model: "Corolla" }, 5)); // Invalid color
