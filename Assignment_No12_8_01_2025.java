//PreOrder Traversal root-left-right

class Node{
  int val;
  Node right, left;
  public Node(int val){
    this.val = val;
    right = null;
    left = null;
  }
}

public class Assignment_No12_8_01_2025 {
  public static void preOrder(Node node){
    if(node == null){
      return;
    }
    System.out.println(" "+node.val);
    preOrder(node.left);
    preOrder(node.right);
  }
  public static void main(String[] args) {
    Node root = new Node(1);
    root.left = new Node(2);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right = new Node(3);
    root.right.right = new Node(6);
    preOrder(root);
  }
}
