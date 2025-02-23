/* Problem statement

Create a Library constructor that initializes a books array. Implement:

. addBook(book): Adds a book to the books array.
. findBook(title): Searches for a book by title and returns "Book found" or "Book not
found".

Challenge

· Implement Library constructor with a books array.
. Attach addBook(book) and findBook(title) methods to the prototype.  */

function Library() {
  this.books = [];
}

Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.findBook = function (title) {
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].title === title) {
      return "Book found";
    }
  }
  return "Book not found";
};

Library.prototype.findBookbyincludemethod = function (title) {
  return this.books.includes(title) ? "Book not found" : "Book found";
};

const library = new Library();
library.addBook({ title: "Harry Potter" });
library.addBook({ title: "The Hobbit" });
console.log(library.findBook("Harry Potter")); // Book found
console.log(library.findBookbyincludemethod("The Hobbit")); // Book found
console.log(library.findBook("The Alchemist")); // Book not found
