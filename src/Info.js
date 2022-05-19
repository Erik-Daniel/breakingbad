import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Info({characters}) {
    let navigate = useNavigate();
    const { id } = useParams();
    const character = characters[id - 1];
    useEffect(() => {
      if(!id.match("^[0-9]*$") || id > characters.length || id < 1){
        navigate("/");
      }
    }, [id, characters.length])
    if(id <= characters.length && id >= 1){
      if(characters.length != 0){
        return (
          <div className='info'>
            <img src={character.img}></img>
            <h2>{character.name}</h2>
            <div className='info-text'>
              <h3>{"Birthday: " + character.birthday}</h3>
              <h3>{"Nickname: " + character.nickname}</h3>
              {character.occupation.length != 0 ? <div className='occupation'><h3>Occupation:</h3><ul>{character.occupation.length != 0 ? character.occupation.map((occ, index) => {return(<li key={index}>{occ}</li>)}) : null}</ul></div> : null}
              <h3>{"Status: " + character.status}</h3>
              <h3>{"Portrayed: " + character.portrayed}</h3>
            </div>
          </div>
        )
      }
    }
  }
