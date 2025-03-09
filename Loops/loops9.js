/* You've been tasked with designing the perfect shiny diamond rug cursh's room. They love stars,
and you've decided to make a sparkling pattern using them. You need to help them create this
rug, where the stars are arranged in the shape of a diamond!

Problem Statement:
Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The
number n represents the size of the diamond, with the middle of the diamond having 2n - 1
stars.


Important Rules:

1. Each line must not have trailing spaces.
2. The output must not have an extra newline at the end.

For example:

    For n = 4, the output will look like:
*    
***
*****
*******
*****
***
*
*/

function shinyDiamondRug(n) {
  let diamond = "";

  //Upper half of the diamond
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }

  //Lower half of the diamond
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }
  return diamond;
}

//sample usage
console.log(shinyDiamondRug(4));
console.log(shinyDiamondRug(5));
console.log(shinyDiamondRug(3));
