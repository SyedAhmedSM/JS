/* Problem statement

You need to create a constructor function Animal that takes a name parameter. Add a method
makeSound to its prototype, which always returns "Some generic sound".

Challenge

. Implement a constructor function Animal that initializes the name property.
. Attach a method makeSound to its prototype that returns "Some generic sound". */

// Solution
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

// Example usage
const a1 = new Animal("Dog");
console.log(a1.makeSound()); // Some generic sound
console.log(a1.name); // Dog
const a2 = new Animal("Cat");
console.log(a2.makeSound()); // Some generic sound
console.log(a2.name); // Cat
