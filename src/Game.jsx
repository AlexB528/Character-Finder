import React, {useState , useEffect} from 'react';
import { useLocation } from "react-router-dom";
import './styles/style.css';
import GameImage1 from './GameImage1.jsx'
import Header from './Header.jsx'

function Game() {

    const location = useLocation();
    const [characters, setCharacters] = useState(location.state.characters);
    const [success, setSuccess] = useState(false);

    const characterClicked = (character) => {
        setCharacters((prevCharacters) => {
          if (character.difficulty === 'easy') {
            return {
              ...prevCharacters,
              easyCharacter: {
                ...prevCharacters.easyCharacter,
                clicked: true
              }
            };
          } else if (character.difficulty === 'medium') {
            return {
              ...prevCharacters,
              mediumCharacter: {
                ...prevCharacters.mediumCharacter,
                clicked: true
              }
            };
          } else if (character.difficulty === 'hard') {
            return {
              ...prevCharacters,
              hardCharacter: {
                ...prevCharacters.hardCharacter,
                clicked: true
              }
            };
          }
          return prevCharacters; // No change if the character is not found
        });
    };
    
    useEffect(() => {
      if (
        characters.easyCharacter &&
        characters.mediumCharacter &&
        characters.hardCharacter &&
        characters.easyCharacter.clicked &&
        characters.mediumCharacter.clicked &&
        characters.hardCharacter.clicked
      ) {
        setSuccess(true);
      }
    }, [characters]);

    // useEffect(() => {
    //   if (characters) {
    //     console.log('characters is true')
    //   }
    // }, []);

    return (
        <div className='parentDiv'>
        {/*purpose of the below characters.easyCharacter is so that Header component only renders when this object key exists*/}
        {characters.easyCharacter && <Header characters={characters} success={success}/>}
        <GameImage1 characters={characters} changeParentCharactersClickedState={characterClicked} />
        </div>
    );
}

export default Game;
