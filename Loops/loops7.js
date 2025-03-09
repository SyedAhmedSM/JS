/* You have multiple levels of stars to count. Each level contains a certain number of stars. How
many total stars are there?

Problem Statement:
Create a function that takes an array of arrays (representing the number of stars in each level) and
returns the total number of stars. */

// You just need to implement the totalStars function
function totalStars(starLevels) {
  let total = 0;
  for (let i = 0; i < starLevels.length; i++) {
    total += starLevels[i].length;
  }

  return total;
}

//sample usage
console.log(totalStars([["*", "*", "*"], ["*", "*"], ["*"]])); // 6
console.log(
  totalStars([
    ["*", "*"],
    ["*", "*", "*", "*"],
    ["*", "*", "*"],
  ])
); // 9
