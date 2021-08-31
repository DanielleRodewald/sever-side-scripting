  // Core node package for reading and writing files
var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inception, Die Hard" in the file
fs.writeFile("movies.txt", "Inception, Die Hard", function(error) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // Otherwise, it will print: "movies.txt was updated!"
  console.log("movies.txt was updated!");

});


// Terminal cd 08-WriteFile
// node write.js
//create movies.txt file in VS Code with string "Inception, Die Hard"
