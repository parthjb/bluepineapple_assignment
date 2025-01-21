//I used Java to create this Library Management System.
//In this HashMap is used to store,display,search and delete the books from library.
import java.util.*;

public class LibraryManagement {
  private HashMap<String, String>map;

  public LibraryManagement(){
    map = new HashMap<String, String>();
  }



  public void insert(String bookid,String bookdetails){
    if(map.containsKey(bookid)){
      System.out.println("Book already exists");
      System.out.println("--------------- ");
    }else{
      map.put(bookid, bookdetails);
      System.out.println("Book is inserted successfully");
      System.out.println("--------------- ");
    }
  }



  public void display(){
    for(String key : map.keySet()){
      System.out.println("Id :"+key+" Details :"+map.get(key));
      System.out.println("--------------- ");
    }
  }



  public void search(String bookid){
    if(map.containsKey(bookid)){
      System.out.println("Book details: "+map.get(bookid));
      System.out.println("--------------- ");
    }else{
      System.out.println("Book not found");
      System.out.println("--------------- ");
    }
  }



  public void delete(String bookid){
    if(!map.containsKey(bookid)){
      System.out.println("Book not found");
      System.out.println("--------------- ");
    }
    map.remove(bookid);
    System.out.println("Book is removed");
    System.out.println("--------------- ");
    
  }

  public static void main(String[] args) {
    LibraryManagement obj = new LibraryManagement();
    Scanner sc = new Scanner(System.in);
    int count;

    do{


      
      System.out.println("------Welcome to library management system------");
      System.out.println("------------------------------------------------");
      System.out.println("----------------------Menu----------------------");
      System.out.println("            Enter 1 to insert the book");
      System.out.println("            Enter 2 to display the book");
      System.out.println("            Enter 3 to search the book");
      System.out.println("            Enter 4 to delete the book");
      System.out.println("            Enter 5 to exit from the library");
      System.out.println("------------------------------------------------");
      System.out.print("Enter your choice :");
      count = sc.nextInt();
      sc.nextLine();



      switch(count){

        case 1:System.out.print("Enter the book id :");
               String bookidForInsert = sc.nextLine();
               System.out.print("Enter the book details :");
               String bookDetails = sc.nextLine();
               obj.insert(bookidForInsert,bookDetails);
               break;

        case 2:System.out.println("Displaying all the books :");
               obj.display();
               break;

        case 3:System.out.print("Enter the book id :");
               String bookidForSearch = sc.nextLine();
               obj.search(bookidForSearch);
               break;

        case 4:System.out.println("Enter the book id :");
               String bookidForDelete = sc.nextLine(); 
               obj.delete(bookidForDelete);
               break;

        case 5:System.out.println("Exiting from the library");
               break;     

        default:System.out.println("Invalid Option");
               break;
      }


    }while (count != 5);
  }
}
