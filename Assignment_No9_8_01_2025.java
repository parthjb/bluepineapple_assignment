public class Assignment_No9_8_01_2025 {
  public static int binarySearch(int[] arr, int target){
    int low = 0, high = arr.length-1, mid = 0;
    while(low<high){
      mid = (low+high)/2;

      if(arr[mid]==target){
        return mid+1;
      }

      if(target > mid){
        low = mid+1;
        low++;
        high--;
      }

      if(target < mid){
        high = mid-1;
        low++;
        high--;
      }
    }

    return 0;
  }

  public static void main(String[] args){
    int[] arr = {1,2,3,4,5,6,7,8,9,10};
    int target = 5;
    int ans = binarySearch(arr, target);
    System.out.println("Index of target is : "+ans);
  }
}
