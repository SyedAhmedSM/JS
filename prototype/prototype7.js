/* Problem statement

Create an Employee constructor that initializes name, position, and salary. Implement:

. applyBonus (percent): Increases the salary by the given percentage.

Challenge

. Implement Employee constructor with name, position, and salary
. Attach applyBonus (percent) to the prototype to increase salary. */

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}

Employee.prototype.applyBonus = function (percent) {
  this.salary += (this.salary * percent) / 100;
  console.log(`Bonus applied: ${percent}%`);
};

// Example usage
const e1 = new Employee("John", "Developer", 1000);
e1.applyBonus(10); // Bonus applied: 10%
console.log(e1.salary); // 1100
e1.applyBonus(20); // Bonus applied: 20%
console.log(e1.salary); // 1320
e1.applyBonus(30); // Bonus applied: 30%
console.log(e1.salary); // 1716
e1.applyBonus(40); // Bonus applied: 40%
