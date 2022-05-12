import React from 'react'
import "./styles.css";
import Info from './Info.js';

export default function Widgets({character}) {

  
  return (
    <div>
          <div className='widget'>
              <img width='80%' height='80%' src={character.img}/>
              <h2>{character.name}</h2>
          </div>
    </div>
  )
}
