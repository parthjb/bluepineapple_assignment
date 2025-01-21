public class Assignment_No4_7_01_2025 {
  //frequency of numbers
  public static void main(String[] args){
    
    int a = 94589358;
    int temp = a;
    int count = 0;
    int max = 0;
    while (temp > 0) {
      temp = temp/10;
      int rem = temp%10;
      if (rem > max){
        max = rem;
      }
      count++;
    }

    int[] arr = new int[max+1];
    while(a > 0){
      int rem = a%10;
      arr[rem] = arr[rem]+1;
      a = a/10;
    }

    for(int i=0; i<arr.length; i++){
      System.out.println(i+" : "+arr[i]);
    }
    
  }
}
