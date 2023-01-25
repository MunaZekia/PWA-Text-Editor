// music should be an object with title, artist, and album properties
//const music = {
  // code here
 
//};

const music = {
  first: "Common",
  last: "Saints",
  Name: "Dreams",
  year: "2021"
  // code here
 
};
//${}variable declaratio
// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `The song name is ${music.Name}. Group name is ${music.first} ${music.last}. `;

console.log(songSnippet)

