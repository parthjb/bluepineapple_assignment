const http = require('http');//including built-in http module to create localserver.
const {getMessage} = require("./helper");//including user-defined helper module for getMessage() method.

http.createServer(function(req ,res)//creating http server
{
  res.write("Welcome to Node.js!");//write() method is used to send response message
  console.log(getMessage());//printing the message inside the console.
  res.end();
}).listen(3000);//this server listens on port number 3000