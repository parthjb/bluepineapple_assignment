// Non-blocking function

const fs = require("fs");//invoking file system module

const data = fs.readFile('./log.txt',{encoding:'utf8',flag:'r'},function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});//readfile function to read the file content
console.log("Hello World..");
console.log(data); //file data