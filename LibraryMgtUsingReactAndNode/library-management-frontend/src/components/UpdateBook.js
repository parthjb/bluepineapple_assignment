import {useState} from 'react'
import { updateBook } from '../services/bookService';

const UpdateBook = () => {
  const [book, setBook] = useState(null);
  const [bookid, setbookId] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    const updated = await updateBook(bookid, { title, author, publishedYear });
    setBook(updated);
    setTitle("");
    setAuthor("");
    setPublishedYear("");
    setbookId("")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idForBook" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> ID</label>
        <input type="number" id='idForBook' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={bookid} onChange={(e) => setbookId(e.target.value)} required />
        <label htmlFor='title' class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> Title</label>
        <input type='text' id='title' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={title} onChange={(e) => setTitle(e.target.value)} required/>

        <label htmlFor='author' class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> Author</label>
        <input type='text' id='author' class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={author} onChange={(e) => setAuthor(e.target.value)} required/>

        <label htmlFor='py' class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> Pubilshed year</label>
        <input type='text' id='py'  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} required/>
        
        <button type='submit' class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
      </form>
      <ul>
      { book && (<h1>Book number {book.id} is updated</h1>)}
      </ul>
      
    </>
  );
};

export default UpdateBook;