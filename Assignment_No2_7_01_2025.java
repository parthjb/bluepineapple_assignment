public class Assignment_No2_7_01_2025 {
  //matrix multiplication
  public static void main(String[] args) {
    int[][] m1 = {{1,2,3},{4,5,6},{23,34,34}};
    int[][] m2 = {{7,8,9},{10,11,12},{34,54,34}};

    int[][] ans = new int[3][3];

    for(int i=0; i<3; i++){
      for(int j=0; j<3; j++){
        ans[i][j] = 0;
        for(int k=0; k<3; k++){
          ans[i][j] += m1[i][k] * m2[k][j];
        }
      }
    }

    for(int i=0; i<3; i++ ){
      for(int j=0; j<3; j++){
        System.out.print(ans[i][j] + " ");
      }
    }


  }
}
