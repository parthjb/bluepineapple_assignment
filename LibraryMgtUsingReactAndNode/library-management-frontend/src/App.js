import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import BookById from './components/BookById';
import UpdateBook from './components/UpdateBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='/AddBook' element={<AddBook/>}/>
            <Route path='/BookList' element={<BookList/>}/>
            <Route path='/BookById' element={<BookById />}/>
            <Route path='/UpdateBook' element={<UpdateBook/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
