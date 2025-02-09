import { useEffect, useState } from "react";
import { getBooks, deleteBook  } from "../services/bookService";

const BookList = () => {
  const [books, setBooks] = useState([]);//why this [] in useState arg

  useEffect(() => {
    fetchBooks();
  },[]);

  const fetchBooks = async () => setBooks(await getBooks());

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  return(
    // <div>
    //   <h2>Library Books</h2>
    //   <ul>
    //     {
    //       books.map(book => (
    //         <li key={book.id}>
    //           {book.title} by {book.author} ({book.publishedYear})
    //           <button onClick={() => handleDelete(book.id)}>Delete</button>
    //         </li>
    //       ))
    //     }
    //   </ul>
    // </div>

    



<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Book ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Book Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Author Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Published Year
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
          {
            books.map(book => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {book.id}
                </th>
                <td class="px-6 py-4">
                    {book.title}
                </td>
                <td class="px-6 py-4">
                    {book.author}
                </td>
                <td class="px-6 py-4">
                    {book.publishedYear}
                </td>
                <td class="px-6 py-4 text-right">
                    <button onClick={() => handleDelete(book.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
            ))
          }
        </tbody>
    </table>
</div>


  );
};

export default BookList;