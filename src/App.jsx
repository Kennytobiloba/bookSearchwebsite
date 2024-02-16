import './App.css';
import './index.css'
import { AppProvider } from './context';
import {
  BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Bookdetails from './Components/Bookdetails/Bookdetails';
import BookList from './Components/BookList/BookList';


function App() {
  return (
  <AppProvider>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<Bookdetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppProvider>
   
  
   
  );
}

export default App;
