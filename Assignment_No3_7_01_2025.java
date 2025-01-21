public class Assignment_No3_7_01_2025 {
  //number of digits
  public static void main(String[] args){
    int a = 123234;
    int count = 0;

    while(a > 0){
      a = a/10;
      count++;
    }

    System.out.println("Total number of integers :"+count);
  }
}
