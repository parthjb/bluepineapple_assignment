//InOrder Traversal left-root-right

class Node {
  Node left, right;
  int val;
  public Node(int item){
    val = item;
    left = null;
    right = null;
  }
}

public class Assignment_No11_8_01_2025 {

  public static void printInorder(Node node){
    if(node == null){
      return;
    }
    printInorder(node.left);

    System.out.println(" "+node.val);

    printInorder(node.right);
  }
  public static void main(String[] args) {
     Node root = new Node(1);
     root.left = new Node(2);
     root.right = new Node(3);
     root.left.left = new Node(4);
     root.left.right = new Node(5);
     root.right.right = new Node(6);

     printInorder(root);
  }
}
