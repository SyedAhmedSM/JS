/* You have a list of food items, but you want to keep only the healthy ones. Remove all items that
contain "Burger".

Problem statement: Create a function that removes unhealthy food items (those containing
"Burger") and returns the updated list. */

// You just need to implement the filterHealthy function
function filterHealthyusingincludes(foodList) {
  // Remove unhealthy food and return updated list
  return foodList.filter((food) => !food.includes("Burger"));
}

function filterHealthy(foddList) {
  // Remove unhealthy food and return updated list
  return foddList.filter((food) => food !== "Burger");
}

// Sample usage
console.log(filterHealthy(["Salad", "Burger", "Fries", "Pizza"])); // Output: ["Salad", "Fries", "Pizza"]
console.log(filterHealthyusingincludes(["Burger", "Fries", "Pizza"])); // Output: ["Fries", "Pizza"]
console.log(filterHealthy(["Salad", "Pizza"])); // Output: ["Salad", "Pizza"]
