import React from 'react'
import "./styles.css";
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Widgets({characters}) {
  const [query_data, set_query_data] = useState(characters);


  function query(e) {
    let search = e.target.value.toLowerCase();
    let newArray = [];
    characters.map(character => {
      let name = character.name.toLowerCase();
      if(name.includes(search)){
        newArray.push(character);
      }
    })
    set_query_data(newArray);
  }
    return (
      <div className='container'>
        <input type='search' placeholder='Search' onChange={(e) => {query(e)}}></input>
        <div className='subcontainer'>
            {query_data.map(character => {
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
      </div>
    )
}
