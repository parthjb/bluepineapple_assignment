async function getPosts(){
  try{
    //fetch both post and comment using Promise.all()
    let [post, comment] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments")
    ]);

    let posts = await post.json();//wait until post response is not converted into json
    let comments = await comment.json();////wait until comment response is not converted into json

    //loops to print some data from posts and comments
    for(let i=0; i<5; i++){
      console.log("Title :"+posts[i].title);
      console.log("Body :"+posts[i].body);
      console.log("------------------------");
    }

    for(let i=0; i<5; i++){
      console.log("Title :"+comments[i].name);
      console.log("Body :"+comments[i].email);
      console.log("------------------------");
    }
  }catch(error)//error handling
  {
    console.error(error);
  }
}

getPosts()//function call.