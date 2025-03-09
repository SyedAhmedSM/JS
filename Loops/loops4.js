/* You're preparing for a picnic and need to fill several water bottles. Each bottle requires a different
amount of water, but you're going to fill them one by one. How do you track the amount of water
you're adding to each bottle?

Problem Statement:
Create a function that takes an array of water amounts (in liters) for each bottle and adds them
up. The function should return the total amount of water you've filled in all the bottles. */

// You just need to implement the totalWater function
function totalWater(waterAmounts) {
  let total = 0;
  for (let i = 0; i < waterAmounts.length; i++) {
    total = total + waterAmounts[i];
  }
  return total;
}

//sample usage
console.log(totalWater([2, 4, 6])); //12
console.log(totalWater([1, 2, 3, 4, 5])); //15
