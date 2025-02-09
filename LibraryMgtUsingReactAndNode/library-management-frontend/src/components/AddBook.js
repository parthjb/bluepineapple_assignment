import React,{ useState } from "react";
import {createBook } from "../services/bookService";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook({ title, author, publishedYear});
    setTitle("");
    setAuthor("");
    setPublishedYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-6">
        <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Book Title</label>
        <input type="text" id="success" class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400         placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div class="mb-6">
        <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Author Name</label>
        <input type="text" id="success" class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Author Name" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>

      <div class="mb-6">
        <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Published Year</label>
        <input type="text" id="success" class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Pubilshed Year" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required/>
      </div>
      
      <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Book</button>
    </form>
  );
};


export default AddBook;