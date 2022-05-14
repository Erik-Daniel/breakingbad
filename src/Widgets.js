import React from 'react'
import "./styles.css";
import Info from './Info.js';
import {Link} from 'react-router-dom';

export default function Widgets({characters}) {

  console.log(characters)
  return (
    <div className='container'>
        {characters.map(character => {
          return (
            <Link key={character.char_id} to={'/' + character.char_id}>
              <div  className='widget'>
                <img src={character.img}/>
                <h2>{character.name}</h2>
              </div>
            </Link>
          )
          
        })}
          
    </div>
  )
}
