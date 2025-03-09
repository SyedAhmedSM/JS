/* You have a basket full of apples. You need to count how many apples are in the basket, but you
don't know the exact number. Each time you pick an apple, you count one. Your task is to count
how many apples are in the basket.

Problem Statement:
Create a function that counts the number of apples in the basket using a loop. */

// You just need to implement the countApples function
function countApples(apples) {
  let count = 0;
  for (let i = 0; i < apples; i++) {
    count++;
  }
  return count;
}

//sample usage
console.log(countApples(15)); //15
console.log(countApples(10)); //10
