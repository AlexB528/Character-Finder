import React, {useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";
import './styles/style.css';
import { getCharacters } from './databaseFunctions.js';
import bowserIMG from './assets/bowser.png';
import yubabaIMG from './assets/yubaba.png';
import knightIMG from './assets/the-knight.png';

const HomePage = () => {

  const [characters, setCharacters] = useState({});

  useEffect(() => {
    const loadCharacters = async () => {
      const charactersArray = await getCharacters();
      const easy = charactersArray.find(element => element.name === 'Bowser');
      const medium = charactersArray.find(element => element.name === 'Yubaba');
      const hard = charactersArray.find(element => element.name === 'The Knight');
      setCharacters({
        easyCharacter : {
          name: easy.name,
          image: bowserIMG,
          clicked: false,
          coordinatesList: easy.coordinatesList,
          difficulty: easy.difficulty,
        },
        mediumCharacter: {
          name: medium.name,
          image: yubabaIMG,
          clicked: false,
          coordinatesList: medium.coordinatesList,
          difficulty: medium.difficulty,
        },
        hardCharacter: {
          name: hard.name,
          image: knightIMG,
          clicked: false,
          coordinatesList: hard.coordinatesList,
          difficulty: hard.difficulty,
        }
      })
    }
    loadCharacters();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Game", { state: { characters } }); // Change the route to "/Game" when the start button is clicked
  };

  return (
    // purpose of the below characters.easyCharacter is so that component only renders when this object key exists
    <>
    {characters.easyCharacter &&
    (<div className="homePageFlexContainer">
      <div className="homePageFlexChild homePageDescription">
          <div>This game is like where's waldo. However, instead of finding waldo, you will find these characters instead.</div>
          <button onClick={handleClick} className='startButton'>Start</button>
      </div>
      <div className="homePageFlexChild homePageImages">
          <div className="homePageCharcter">
            <h2 style={{textAlign: 'center'}}>{characters.easyCharacter.name}</h2>
            <img src={characters.easyCharacter.image} alt="Bowser" className='homePageCharacterImage' />
          </div>
          <div className="homePageCharcter">
            <h2 style={{textAlign: 'center'}}>{characters.mediumCharacter.name}</h2>
            <img src={characters.mediumCharacter.image} alt="The Knight" className='homePageCharacterImage' />
          </div>
          <div className="homePageCharcter">
            <h2 style={{textAlign: 'center'}}>{characters.hardCharacter.name}</h2>
            <img src={characters.hardCharacter.image} alt="Yubaba" className='homePageCharacterImage' />
          </div>
      </div>
    </div>)
    }
    </>
  );
}

export default HomePage;
