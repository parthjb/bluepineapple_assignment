const fs = require("fs");

fs.appendFile("log.txt","Hello World ",function(err){
  if(err){
    throw(err);
  }
  console.log("Log is saved..")
})