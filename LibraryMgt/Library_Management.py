import mysql.connector
import Insert
import Display
import Update
import Delete

mydb = mysql.connector.connect(
  host = "localhost", user = "root", password = "W7301@jqir#",
  database = "library_management_system"
)


mycursor = mydb.cursor()

# database and table queries: 

# mycursor.execute("Create database Library_Management_System")

# mycursor.execute("Create table books(book_id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, author VARCHAR(255) NOT NULL, genre VARCHAR(255) NOT NULL, publication_date DATE NOT NULL, language VARCHAR(255) NOT NULL)");

# print(mydb)


count = 0
while count!=5:
  print("Welcome to the Library Management System")
  print("----------------------------------------")
  print("----------------MENU--------------------")
  print("Press 1 to insert book in library :")
  print("Press 2 to display books from library :")
  print("Press 3 to delete book from library :")
  print("Press 4 to update book in library :")
  print("Press 5 for exit")
  count = int(input("Enter your choice here :"))
  
  if count==1:
    Insert.insert(mycursor,mydb)
  elif count==2:
    Display.display(mycursor,mydb)
  elif count==3:
    Delete.delete(mycursor,mydb)
  elif count==4:
    Update.update(mycursor,mydb)
  else :
    print("Incorrect option")






