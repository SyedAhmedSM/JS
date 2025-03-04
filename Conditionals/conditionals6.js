/* You need to determine what action to take based on traffic light colors:

. "Red" -> Stop
. "Yellow" -> Slow Down
. "Green" > Go
. "Blue" > Invalid Color

Problem Statement:
Write a function that uses switch-case to return the correct action. */

// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  switch (color) {
    case "Red":
      return "Stop";
    case "Yellow":
      return "Slow Down";
    case "Green":
      return "Go";
    default:
      return "Invalid Color";
  }
}

//sample usage
console.log(trafficLightAction("Red")); // "Stop"
console.log(trafficLightAction("Yellow")); // "Slow Down"
console.log(trafficLightAction("Green")); // "Go"
console.log(trafficLightAction("Blue")); // "Invalid Color"
