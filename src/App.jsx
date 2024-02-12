import './App.css';
import './index.css'
import { AppProvider } from './context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Bookdetails from './Components/Bookdetails/Bookdetails';
import BookList from './Components/BookList/BookList';


function App() {
  return (
  <AppProvider>
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="book" element={<BookList />} />
        <Route path="book/:id" element={<Bookdetails />} />
      </Routes>
    </Router>
    </AppProvider>
   
  
   
  );
}

export default App;
