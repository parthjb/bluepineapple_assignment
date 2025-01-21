class Assignment_No1_7_01_2025{
  //perfect number between the given range
  public static void main(String[] args){
      int range = 100000;
      int sum = 0;

      for(int j=1; j<range; j++){

        for(int i=1; i<=j/2; i++){

          if(j%i == 0){
              sum += i;
          }
          
      }

      if(sum == j){
        System.out.print(sum+" ");
      }
      sum = 0;
    }
  }
}