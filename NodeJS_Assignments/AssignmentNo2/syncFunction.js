// blocking function

const fs = require("fs");//invoking file system module

const data = fs.readFileSync('./log.txt',{encoding:'utf8',flag:'r'});//readFileSync is an function that executed synchronously and then the remaining program

console.log(data);//prints file data in console

console.log("Hello Bluepineapple...");//last statement after printing file data.