import axios from "axios";

const API_URL = " http://127.0.0.1:8000/api/books";
//  http://localhost:5000/api/books for node.js

export const getBooks = async() => (await axios.get(API_URL)).data;

export const getBookById = async(id) => (await axios.get(`${API_URL}/${id}`)).data;

export const createBook = async(book) => (await axios.post(API_URL,book)).data;

export const updateBook = async(id,book) => (await axios.patch(`${API_URL}/${id}`,book)).data;

export const deleteBook = async(id) => (await axios.delete(`${API_URL}/${id}`)).data;