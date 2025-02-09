from fastapi import FastAPI, Request
from fastapi import Depends
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



def readData():
  with open("data.json","r") as file:
    data = json.load(file);
    return data;


def writeData(books):
  with open("data.json","w") as file:
    json.dump(books,file,indent=4)
    


#to send the json file as a response
@app.get("/api/books/")
def get_books():
  data = readData()
  return JSONResponse(content=data)




#GET http://127.0.0.1:8000/items/42?q=parth
#@app.get is an decoretor
@app.get("/api/books/{item_id}")#Defines a dynamic route where item_id is a path parameter
def get_book_by_id(item_id:int):
  data = readData()
  for book in data:
    x = book["id"]
    if x == item_id:
      return JSONResponse(content=book)
    
  return {"Book not found"}



#to insert the new book
@app.post("/api/books/")
async def create_book(request:Request):
  book_data = await request.json()

  books = readData()

  if books:
   book_data["id"] = books[-1]["id"]+1
  else:
    book_data["id"] = 1

  books.append(book_data)
  writeData(books)


#to update the book
@app.patch("/api/books/{book_id}")
async def update_Book(request:Request, book_id:int):
  book_data = await request.json()
  books = readData()
  bookFound = False
  for book in books:
    if book["id"] == book_id:
      book.update(book_data)
      bookFound = True
      writeData(books)
      return JSONResponse(content=book)
    
  if not bookFound:
    return {"Book not found!"}

    
  
  
  
#to delete the book
@app.delete("/api/books/{book_id}")
def delete_Book(book_id:int):
  books = readData()
  bookFound = False
  for i, book in enumerate(books):
    if book["id"] == book_id:
      del books[i]
      bookFound = True  
      break
  
  if not bookFound:
    return {"Book not found!"}

  writeData(books)
  return {"Book is deleted"}

