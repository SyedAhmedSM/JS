/* You're packing chocolate bars into gift boxes. Each box must contain the same number of
chocolate bars. How many chocolate bars do you need for all the boxes?

Challenge

Create a function that multiplies two numbers (chocolate bars per box and number of boxes) and
returns the total number of chocolate bars needed. */

function totalChocolateBars(barsPerBox, numberOfBoxes) {
  // Return barsPerBox multiplied by numberOfBoxes
  return barsPerBox * numberOfBoxes;
}

//sample usage
console.log(totalChocolateBars(15, 3)); //45
console.log(totalChocolateBars(5, 10)); //50
