const express = require('express');//importing express framework
const APP = express();//creating the instance of express()
const PORT = 3000;// port number to listen the request



//custome middleware for logging request
const Request = (request,response,next) => {
  console.log(`Method :${request.method}`);//logging method
  console.log(`Url :${request.url}`);//logging url
  next();//for calling next middleware
}

APP.use(Request);

//APP.get() creates the Get endpoint at http://localhost:3000/Greet
APP.get('/Greet',(request,response) => {
  response.send('<h1>"Welcome to Express!"</h1>');//sends the response to the request
  console.log(request);
});

APP.use(express.json());//express.json() is function that parse JSON data from incoming request.

//taking data from the user by usign post method and sending response.
APP.post('/Data',(request, response) => {
  const {data} = request.body;//taking data from request body to the data variable.
  
  response.send(`Data recived ${data}`);//sending response to the user.
  // console.log(data);
  
});


//sending user list to the request
APP.get('/Users',(request,response) => {
  const users = [
    {"name": "Parth"},
    {"name": "Moiz"},
    {"name": "Abhishek"},
    {"name": "Pradeep"},
  ];//created the array of users

   response.send(users);//sending the array in reponse to the user

});

//this route handler fetches data from jsonplaceholder.com and send to the user.
APP.get('/external-posts',(request,response) => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => response.send(json)) 
});



//This is the custome middleware for specific source
APP.get('/CustomeMiddleWare',(request,respose,next) => {
  console.log(`Method :${request.method}`);
  console.log(`Url :${request.url}`);
  next();
},(resquest,response) =>{
  response.send(`<h1>Custome Middleware</h1>`);
});


//this middleware handles invalid routes
APP.use((request,response) => {
  response.status(404).send("404 error occured.");//sending error message response to the user.
});

//error handling middleware
APP.use((error,request,response,next) => {
  console.error(error.stack);//printing error in console
  response.status(500).send("Somthing went wrong.");//sending error message response to the user.
});


APP.listen(PORT,(error) => {
  if(!error) {
    console.log(`Server is listening at http://localhost:${PORT}`);//http://localhost:3000/Greet
  }else {
    console.log(`Error occured.`);
  }
  
});//app.listen() method starts the server and listen the request on port number 3000.