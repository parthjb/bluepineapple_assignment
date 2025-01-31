class Calculator{
  constructor(){
    this.val = 0;
  }

  // all the functions for the calculator are written below.
  add(num){
    this.val += num;
    return this;
  }

  substract(num){
    this.val -= num;
    return this;
  }

  multiply(num){
    this.val *= num;
    return this;
  }

  divide(num){
    this.val /= num;
    return this;
  }

  //this function returns the final result.
  getResult(){
    return this;
  }

}

let result = new Calculator();//creating the object of calculator class.
console.log(result.add(5).substract(2).multiply(3).divide(2));//function chaining