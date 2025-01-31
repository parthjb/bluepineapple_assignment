function fetchData()//fetchData() function to simulating the API call with setTimeout of 2 seconds.
{
  let promise = new Promise(function(resolve,reject)//creating the new promise
  {
    setTimeout(function(){
      let result = true;//to check weather we resolve the promise or reject.

      if (result)//if..else for result.
      {
        resolve("Data fetched successfully.")
      }else{
        reject("Error while fetching.")
      }
    },2000)//timeout for function execution
  });
  return promise;//returning the result;
}

fetchData()
.then((message => {console.log(message)}))//if promise is resolved then "Data fetched successfully." message will be displayed.
.catch((error => {console.log(error)}))//if promise is rejected then "Error while fetching." message will be displayed.