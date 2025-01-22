import Display

def delete(mycursor,mydb):
  id = input("Enter the book id :")
  sql = "DELETE FROM books where book_id = %s"
  val = list(id) #Could not process parameters: int(3), it must be of type list, tuple or dict
  mycursor.execute(sql,val)
  mydb.commit()
  Display.display(mycursor,mydb)
  print("Book is deleted successfully...!")
  