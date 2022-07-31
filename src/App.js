
import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/services' element={<Services/>}/>
           <Route path='/products' element={<Products/>}/>
           <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;