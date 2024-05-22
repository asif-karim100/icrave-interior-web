
import './App.css';
import { Routes,Route } from 'react-router-dom';
import React from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MainHeader from './MainHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/"  element={<MainHeader/>}>

    <Route index element={<Home></Home>}/>
    <Route path="about" element={<About></About>}></Route>
    <Route path="contact" element={<Contact></Contact>}></Route>
    </Route>
   </Routes>
   

        
      
      </header>
    </div>
  );
}

export default App;
