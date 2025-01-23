const interval = setInterval(displayTimer,600);
    let second = 0;//

    function displayTimer(){
      second++;
      document.getElementById("timer").innerHTML=" "+second;//to display seconds on the screen
      if(second == 11){//to set timer up to the 10 seconds and then show message Time's up!

        clearInterval(interval);//terminating interval
        document.getElementById("timer").innerHTML="Time's up!";
        
      }
    }