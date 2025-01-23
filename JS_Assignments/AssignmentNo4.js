let random = [];
    random.unshift(99,43,15,76,45,56,84,35,78,47);

    function largestNumber(){
      random.sort(function(a,b){return a-b}); //sorting random number array in ascending order.
      console.log("The largest number in array is :"+random.at(-1));
    }
    largestNumber();

    function smallestNumber(){
      console.log("The smallest number in array is :"+random[0]);//after sorting in ascending order   first element is always smallest in that array.
    }
    smallestNumber();

    function averageOfArray(){
      let length = random.length;
      let sum = 0;

      for(let i=0; i<length; i++){
        sum += random[i];
      }
      
      let average = sum/length;
      console.log("The average of array is :"+average);
    }
    averageOfArray();