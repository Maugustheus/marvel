import React from 'react';
import {Routes , Route} from 'react-router-dom';

import Characters from '../pages/characters/index.js';
import Comics from '../pages/comics/index.js';
import Events from '../pages/events/index.js';
import Series from '../pages/series/index.js';

export default ()=>
{
  return(
    <Routes>
     <Route exact path="/" element={<Characters/>}/>
     <Route exact path="/comics" element={<Comics/>}/>
     <Route exact path="/events" element={<Events/>}/>
     <Route exact path="/series" element={<Series/>}/>
    </Routes>
  )
}
