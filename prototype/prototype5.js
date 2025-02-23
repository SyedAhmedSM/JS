/* Problem statement

Create a Shopping Cart system where items can be added with a price. Implement a method
getTotalPrice() that calculates the total price of all items in the cart.

Challenge

. Implement a constructor function ShoppingCart that initializes an empty items array.
. Attach addItem(price) to the prototype to add items.
. Attach getTotalPrice() to calculate the total price of items. */

function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function (price) {
  this.items.push(price);
  console.log(`Item added: ${price}`);
};

ShoppingCart.prototype.getTotalPrice = function () {
  let total = this.items.reduce((acc, cur) => acc + cur, 0);
  console.log(`Total price: ${total}`);
};

// Example usage
const cart = new ShoppingCart();
cart.addItem(50); // Item added: 50
cart.addItem(150); // Item added: 150
cart.addItem(350); // Item added: 350
cart.getTotalPrice(); // Total price: 550
