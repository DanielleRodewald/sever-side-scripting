// As always, we grab the fs package to handle read/write.
var fs = require("fs");

// Next, we store the text given to us from the command line.
var text = process.argv[2] + process.argv[3] + process.argv[4];

// Next, we append the text into the "sample.txt" file.
// If the file didn't exist, then it gets created on the fly.
fs.appendFile("sample.txt", text, function(err) {

  // If an error was experienced we will log it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});



//Terminal: cd 09-AppendFile
// node append.js ExampleText 
//(Anything you write after the node append.js command will be added to the sample.txt file)
