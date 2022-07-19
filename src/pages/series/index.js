import React,{useState, useEffect} from 'react';
import Api from '../../services/Api.js';

export default function Characters()
{
  const [characters, setCharacters] = useState([]);
  const [estado, setEstado] = useState(true);

  useEffect(() =>
  {
    Api
    .get('/series')
    .then(response =>
      {
        setCharacters(response.data.data.results)
      })
  }, [])

  const mostrarOcultar = (e, estado)=>
  {
    let descricao = e.target.parentNode;

    if(estado)
    {
      descricao.classList.add('descricaoVisivel');
      descricao.previousSibling.classList.add('imagemOculta');
      e.target.nextSibling.classList.remove('descricaoOculta')
      setEstado(false)
    } else
    {
      descricao.classList.remove('descricaoVisivel');
      descricao.previousSibling.classList.remove('imagemOculta');
      e.target.nextSibling.classList.add('descricaoOculta')
      setEstado(true)
    }
  }

  return(
      <>
      {
        characters.map(character =>
        {
          console.log(character)
          return(
            <div key={character.key} className="heroisContainer">
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="herois"/>

              <div className="descricaoContainer">
                <p onClick={(e)=>mostrarOcultar(e, estado)} className="heroiName">{character.title}</p>
                <p className="heroiDescricao descricaoOculta">{character}</p>
              </div>

            </div>
          )
        })
      }
      </>
  )
}
