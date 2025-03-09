/* You and your friends are making a list of movies to watch. You want to check how many movies
are in the list.

Problem Statement: Create a function that returns the number of movies in the movie list. */

// You just need to implement the countMovies function
function countMovies(movieList) {
  // Return the number of movies in the movieList
  return movieList.length;
}

//sample usage
console.log(countMovies(["Spiderman", "The Dark Knight", "Avengers"])); //3
console.log(countMovies(["Spiderman", "The Dark Knight"])); //2
