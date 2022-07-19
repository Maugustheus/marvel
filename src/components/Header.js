import React from 'react';
import Logo from '../img/logo_marvel.png';

import Marvel from './Marvel.js';

export default function Header(props)
{
  let link = (pag = '')=>{
    return window.location.href=`http://localhost:3000/${pag}`;
  }
  return(
    <>
    <header>
      <img src={Logo} onClick={()=>link()} className='logo' alt="Marvel Logo"/>
      <div className="linksContainer">
        <button onClick={()=>link()} type="button" className="link">Characters</button>
        <button onClick={()=>link('comics')} type="button" className="link">Comics</button>
        <button onClick={()=>link('events')} type="button" className="link">Events</button>
        <button onClick={()=>link('series')} type="button" className="link">Series</button>
      </div>
    </header>
    </>
  )
}
