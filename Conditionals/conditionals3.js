/* You need to determine if a person is eligible to vote (age 18 or above).

Problem Statement:
Write a function that checks if a person is eligible to vote and returns "Eligible" or "Not Eligible". */

// You just need to implement the checkVotingEligibility function
function checkVotingEligibility(age) {
  // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

//sample usage
console.log(checkVotingEligibility(18)); // "Eligible"
console.log(checkVotingEligibility(17)); // "Not Eligible"
