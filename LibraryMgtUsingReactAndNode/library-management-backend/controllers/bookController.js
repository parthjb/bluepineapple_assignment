const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname,"../data/books.json");

// To read the data from the data.json file
const readData = () => {
  const data = fs.readFileSync(FILE_PATH,"utf-8");
  return JSON.parse(data);
}

//To write the data inside the data.json file
const writeData = (data) => {
fs.writeFileSync(FILE_PATH,JSON.stringify(data,null,2));
}

//Get all books
exports.getBooks = (req,res) => res.json(readData());

//Get a book by ID
exports.getBookById = (req,res) => {
  const book = readData().find(b => b.id === parseInt(req.params.id));

  book ? res.json(book) : res.status(404).json({message: "Book not found"});
}

//Insert new book by using POST method
exports.createBook = (req, res) => {
  let books = readData();
  const newBook = req.body;

  if(books.length > 0){
    newBook.id=books[books.length-1].id+1;
  }else {
    newBook.id = 1;
  }

  books.push(newBook);
  writeData(books);

  res.send(`New book is added successfully.`);
};

//Update the book by using PUT Method.
exports.updateBook = (req, res) => {
  let books = readData();
  const bookIdFromUrl = parseInt(req.params.id); // Extract and convert ID

  const book = books.find(book => book.id === bookIdFromUrl);
  if (!book) {
      console.log("Book not found!");
      return res.status(404).send('Book not found');
  }

  Object.assign(book, req.body);
  writeData(books);
  res.send(book);
};


//Deleting a book by using DELETE Method.
exports.deleteBook = (req,res) => {
  let books = readData();
  const bookIdToDelete = parseInt(req.params.id);

  const updatedBook = books.filter(book => book.id !== bookIdToDelete);

  if(updatedBook.length === books.length){
    return res.status(404).send('Book not found');
  }

  writeData(updatedBook);
  res.send(`Book with ID ${bookIdToDelete} has been deleted successfully.`);
};
