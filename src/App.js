import React from 'react';
import './style.css';
import Marvel from './components/Marvel.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


export default function App()
  {
    return(
      <div>
        <Header/>
        <Marvel/>
        <Footer/>
      </div>
    );
}
