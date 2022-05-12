import { useEffect, useState } from 'react';
import Widgets from './Widgets.js';
import {Routes, Route, Link} from 'react-router-dom';
import './styles.css';
import Info from './Info.js';



function App() {
  const url = 'https://breakingbadapi.com/api/';
  const [character_data, setCharData] = useState([]);

  useEffect(() => {
    let charUrl = url + "characters";
    fetch(charUrl).then(response => response.json()).then(data => setCharData(data));
  }, [])
  return (
    <div className="App">
      
          <h1>Breaking Bad Library</h1>
          <div className='container'>
          <Routes>      
            <Route path='/:id' element={<Info />}></Route>
          </Routes>
          {character_data.map(character => {
            return(
              <Link key={character.char_id} to={"/" + character.char_id} state={character}>
                <Widgets  character={character}></Widgets>
              </Link>
            )
          })}
  
    
      </div>
    </div>
  );
}

export default App;
