// BFS -Traversal in tree

class Node{
  int val;
  Node left, right;
  public Node(int item){
    left = null;
    right = null;
    val = item;
  }
}

public class Assignment_No14_8_01_2025 {
  public static void printLevel(Node root){
    int h = heightOfTree(root);
    int i;
    for(i=1; i<= h; i++){
      print(root,i);
    }
  }

  public static int heightOfTree(Node root){
    if(root == null){
      return 0;
    }
    int leftHeight = heightOfTree(root.left);
    int rightHeight = heightOfTree(root.right);

    if(leftHeight > rightHeight){
      return leftHeight+1;
    }else{
      return rightHeight+1;
    }
  }

  public static void print(Node root,int i){
    if(root == null){
      return;
    }
    if(i==1){
      System.out.println(root.val+" ");
    }else if(i>1){
      print(root.left,i-1);
      print(root.right,i-1);
    }
  }
  public static void main(String[] args) {
    Node root = new Node(10);
    root.left = new Node(20);
    root.left.left = new Node(40);
    root.left.right = new Node(50);
    root.right = new Node(30);
    root.right.right = new Node(60);
    printLevel(root);
  }
}
