import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/HomePgae/Home';
import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';
import Partner from './components/Partner/Partner';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
