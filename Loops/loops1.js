/* You have a pile of gifts, and you want to give each of your friends one gift at a time. You keep
giving them gifts until they all get one.

Problem Statement:
Write a function to distribute gifts to your friends one by one. It should stop once all your friends
have received a gift. */

// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  // write your code here
  let giftsGiven = 0;
  for (let i = 0; i < friends; i++) {
    if (totalGifts > 0) {
      giftsGiven++;
      totalGifts--;
    }
  }
  return giftsGiven;
}

//sample test cases
console.log(distributeGifts(10, 10)); // 10
console.log(distributeGifts(4, 7)); // 4
console.log(distributeGifts(10, 5)); // 5
