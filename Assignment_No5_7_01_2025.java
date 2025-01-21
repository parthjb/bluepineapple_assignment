import java.util.Scanner;

public class Assignment_No5_7_01_2025 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your number :");
    int num = sc.nextInt();

    if(num == 0){
      System.out.println("Zero Rupess");
      return;
    }

      String[] ones = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
      String[] tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
      String[] teens = {"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};

      int crore = num/10000000;
      num = num%10000000;
      int lakh = num/100000;
      num = num%100000;
      int thousand = num/1000;
      num = num%1000;
      int hundred = num/100;
      int rem = num%100;

      StringBuilder res = new StringBuilder();

      if(crore > 0){
        int temp = crore;
        if (temp >= 100) {
          res.append(ones[temp/100]).append(" Hundred ");
          temp = temp%10;
        }

        if (temp >= 20) {
          res.append(tens[temp/10]).append(" ");
          temp = temp%10;
        }else if (temp >= 10) {
          res.append(teens[temp - 10]).append(" ");
          temp = 0;
        }

        if (temp > 0) {
          res.append(ones[temp]).append(" ");
        }

        res.append(" Croer ");
      }

      if (lakh > 0) {
        int temp = lakh;

        if (temp >= 100 ) {
          res.append(ones[temp/100]).append(" Hundred ");
          temp = temp%100;
        }

        if (temp >= 20) {
          res.append(tens[temp/10]).append(" ");
          temp = temp%10;
        }else if (temp >= 10) {
          res.append(teens[temp-10]).append(" ");
          temp = 0;
        }

        if (temp > 0) {
          res.append(ones[temp]).append(" ");
        }
        res.append(" Lakh ");
      }

      if (thousand > 0) {
        int temp = thousand;

        if (temp >= 100 ) {
          res.append(ones[temp/100]).append(" Hundred ");
          temp = temp%100;
        }

        if (temp >= 20) {
          res.append(tens[temp/10]).append(" ");
          temp = temp%10;
        }else if (temp >= 10) {
          res.append(teens[temp-10]).append(" ");
          temp = 0;
        }

        if (temp > 0) {
          res.append(ones[temp]).append(" ");
        }
        res.append(" Thousand ");
      }

      if (hundred > 0) {
        res.append(ones[hundred]).append(" Hundred ");

        if (rem > 0) {
          res.append(" and ");
        }
        
      }

      if (rem > 0) {
        if (rem >= 20) {
          res.append(tens[rem/10]).append(" ");
          rem = rem%10;
        }else if (rem >= 10) {
          res.append(teens[rem-10]).append(" ");
          rem = 0;
        }

        if (rem > 0) {
          res.append(ones[rem]).append(" ");
        }
      }

      res.append(" Rupess ");
      System.out.println(res);
  }
}