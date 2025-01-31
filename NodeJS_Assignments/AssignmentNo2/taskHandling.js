const { nextTick } = require("process");

printState = ()=> {
  console.log("Timeout funtion.");
}

setTimeout(printState,3000);//Executes after the specified delay. It has very low priority as compaired to setImmediate and nextTick.


setImmediate(function a()//Executes immediately after the current loop iteration.
{
  console.log("Immediate funtion.")
});

nextTick(function b()//Executes immediately on the same phase.
{
  console.log("Nexttick function.")
})


// output: 
// Nexttick function.
// Immediate funtion.
// Timeout funtion.