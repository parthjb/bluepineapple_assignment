function validateForm(){

  const name = document.getElementById("name").value;//Input value of name
  const email = document.getElementById("email").value;//Input value of email
  const age = document.getElementById("age").value;//Input value of age

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//Regular Expression for email check.

  if(name === '')//if name is empty then this error will be raised.
  {
    alert("Name is not inserted...");
    return false;
  }else if(!regex.test(email))//Check the input email with Regex.If it is wrong then this error will be raised.
  {
    alert("Email is invalid...");
    return false;
  }else if(age > 0)//If age is provided then 
  {
    if(age > 18){
      alert("The form is submitted..");
    }else{
      alert("Age is less than 18.");
      return false;
    }
  }
  return true;
}