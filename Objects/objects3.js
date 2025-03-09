/* Problem Statement

You are building an online shopping platform. Some products have discounts, and some don't.
You need to check whether a product object contains a discount property.

Challenge

Write a function that checks if a product object has a discount property and returns true or false.

Constraints

· product should be a valid object. */

// You just need to implement the hasDiscount function
function hasDiscount(product) {
  // Check if product has discount property
  if (typeof product === "object" && product !== null) {
    return product.hasOwnProperty("discount");
  } else {
    return false;
  }
}

//sample input
console.log(hasDiscount({ name: "Laptop", price: 50000, discount: 5000 })); // true
console.log(hasDiscount({ name: "Laptop", price: 50000 })); // false
