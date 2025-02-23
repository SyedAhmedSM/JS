/* Problem statement

Create a Playlist constructor that initializes with an empty songs array. Add a method
addSong(song) to the prototype that adds a new song to the playlist.

Challenge

. Implement a constructor function Playlist that initializes an empty songs array.
. Attach a method addSong(song) to its prototype that adds the song to the songs array. */

// Solution
function Playlist() {
  this.songs = [];
}

Playlist.prototype.addSong = function (song) {
  this.songs.push(song);
  console.log(`Song added: ${song}`);
};

// Example usage
const playlist = new Playlist();
playlist.addSong("Song1"); // Song added: Song1
playlist.addSong("Song2"); // Song added: Song2
playlist.addSong("Song3"); // Song added: Song3
playlist.addSong("Song4"); // Song added: Song4
playlist.addSong("Song5"); // Song added: Song5
