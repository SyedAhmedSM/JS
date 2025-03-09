/* Problem Statement

For security reasons, when a user logs out, their password should be removed from the user
object before storing it in logs or analytics.

Challenge

Write a function that removes the password property from a user object and returns the updated
object.

Constraints

· user should be a valid object with at least a username and password.
· If password does not exist, return the object as it is. */

// You just need to implement the removePassword function
function removePassword(user) {
  // Remove password property
  if (user.hasOwnProperty("password")) {
    delete user.password;
  }
  return user;
}

//sample input
console.log(removePassword({ username: "Sam", password: "123abc" })); // { username: "Sam" }
console.log(removePassword({ username: "Sam" })); // { username: "Sam" }
