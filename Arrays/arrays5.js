/* Your bookshelf is a mess! You need to arrange the books in alphabetical order.

Problem Statement: Create a function that sorts the books alphabetically and returns the updated
list. */

// You just need to implement the sortBooks function
function sortBooks(books) {
  // Sort the books alphabetically and return the updated list
  return books.sort();
}

//sample usage
console.log(sortBooks(["Steve", "Mike", "John"])); //["John", "Mike", "Steve"]
console.log(sortBooks(["Steve", "Mike", "John", "Doe"])); //["Doe", "John", "Mike", "Steve"]
