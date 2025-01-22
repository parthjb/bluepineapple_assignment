import Display

def update(mycursor,mydb):
  print(" ")
  print("Update function")
  print(" ")
  book_id = int(input("Enter the book id :"))
  book_name = input("Enter the book name :")
  author_name = input("Enter the author name :")
  genre = input("Enter the genre :")
  pd = input("Enter the publication date :")
  lang = input("Enter the language :")

  sql = "UPDATE books SET title=%s,author=%s,genre=%s,publication_date=%s,language=%s WHERE book_id=%s"
  val =(book_name,author_name,genre,pd,lang,book_id);
  mycursor.execute(sql,val)
  mydb.commit()

  Display.display(mycursor,mydb)
  print("Book is updated successfully...!")
