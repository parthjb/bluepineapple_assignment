let n = 1;
    function addElement(){

      let element = document.createElement("li");// creates new list element.
      let text = document.createTextNode("Item "+n);// creates text Item n 
      n++;//to increment n

      element.append(text);//add text in list element
      document.getElementById("list").append(element);//add new list element in unorderd list

    }