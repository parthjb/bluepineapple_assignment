import Display
def insert(mycursor,mydb):
  print(" ")
  print("Insert function")
  print(" ")
  title = input("Enter the title of book :")
  author = input("Enter the author name :")
  genre = input("Enter the genre(Fiction, Nonfiction ) :")
  pd = input("Enter the publication date(YYYY-MM-DD):")
  lang = input("Enter the language :")
  sql = "INSERT INTO books(title,author,genre,publication_date,language) values(%s,%s,%s,%s,%s)"
  val = (title,author,genre,pd,lang)

  mycursor.execute(sql,val)
  mydb.commit()
  Display.display(mycursor,mydb)
  print("Book is inserted!!!!")