//PostOrder Traversal left - right - root

class Node{
  Node left,right;
  int val;
  public Node(int item){
    left = null;
    right = null;
    val = item;
  }
}

public class Assignment_No13_8_01_2025 {
  public static void postOrder(Node node){
    if(node == null){
      return;
    }
    postOrder(node.left);
    postOrder(node.right);
    System.out.println(" "+node.val);
  }
  public static void main(String[] args) {
    Node root = new Node(10);
    root.left = new Node(20);
    root.left.left = new Node(40);
    root.left.right = new Node(50);
    root.right = new Node(30);
    root.right.left = new Node(45);
    root.right.right = new Node(60);

    postOrder(root);
  }
}
