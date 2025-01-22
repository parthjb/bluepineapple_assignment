def display(mycursor,mydb):
  print(" ")
  print("Display function")
  print(" ")
  sql = "SELECT * FROM books"
  mycursor.execute(sql)
  result = mycursor.fetchall()
  print("Id", " Book Name"," Author Name"," Genre"," Publication Date"," Language")
  for row in result:
    print(row)
    print("\n")