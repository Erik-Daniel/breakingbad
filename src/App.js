import { useEffect, useState } from 'react';
import Widgets from './Widgets.js';
import {Routes, Route} from 'react-router-dom';
import './styles.css';
import Info from './Info.js';



function App() {
  const url = 'https://breakingbadapi.com/api/';
  const [character_data, setCharData] = useState([]);

  useEffect(() => {
    let charUrl = url + "characters";
    fetch(charUrl).then(response => response.json()).then(data =>  {data.map((character,index) => {character.char_id = index + 1; setCharData(prevData => [...prevData, character])})});
  }, [])
  
  if(character_data.length != 0){
    return (
      <div className="App">
            <h1>Breaking Bad Library</h1>
            <Routes>      
              <Route path='/' element={<Widgets characters={character_data}/>}></Route>
              <Route path='/:id' element={<Info characters={character_data}/>}></Route>
            </Routes>
      </div>
    );
  }
  else {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }
}

export default App;
