/* Problem statement

You are designing a simple robot system. Each robot has a name and a batteryLevel. The robot
should have a method charge() that increases the battery level by 20, but it cannot exceed 100.

Challenge

. Implement a constructor function Robot that initializes name and batteryLevel.
. Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring
it does not go above 100. */

// Solution
function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}

Robot.prototype.charge = function () {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
  console.log(`${this.name} charged. Battery level: ${this.batteryLevel}%`);
};

// Example usage
const r1 = new Robot("Robo1", 50);
r1.charge(); // Robo1 charged. Battery level: 70%
r1.charge(); // Robo1 charged. Battery level: 90%
r1.charge(); // Robo1 charged. Battery level: 100%
r1.charge(); // Robo1 charged. Battery level: 100% (doesn't exceed 100)
