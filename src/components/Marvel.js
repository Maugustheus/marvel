import React,{useState} from 'react';
import Api from '../services/Api';
import Characters from '../pages/characters/index.js';

import Rotas from '../services/Rotas';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function Marvel(props)
{
  return(
    <main>
      <article className="gridContainer">
      <BrowserRouter>
        <Rotas/>
      </BrowserRouter>
      </article>
    </main>
  )
}
