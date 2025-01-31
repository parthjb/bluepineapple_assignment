
async function fetchData(){
  try {
    let p = await fetch("https://jsonplaceholder.typicode.com/posts");//fetching data from the API and this waits upto the promise is not fulfield.
    let data = await p.json();//convert the data into json

    //loop to print 1st five title's and body's
    for(let i=0; i<5; i++){
      console.log("Title :"+data[i].title);
      console.log("Body :"+data[i].body);
      console.log("---------------------------------");
    }
  } catch (error) {
    console.error(error);//to handle the error, if any error occured in above code is handled by this block.
  }
}

fetchData()