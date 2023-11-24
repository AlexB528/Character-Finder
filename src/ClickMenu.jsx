import React from 'react';
import './styles/style.css';
import { getCharacters } from './databaseFunctions.js';

// upon a click, this component displays a menu of characters for the user to choose from.
const ClickMenu = (props) => {

  // below 4 functions return style for menu
  const topLeftStyle = (x,y) => {
    return {top: `${y}px`, left: `${x}px`};
  };

  const topRightStyle = (x,y) => {
    return {top: `${y}px`, right: `${x}px`};
  };

  const bottomLeftStyle = (x,y) => {
    return {bottom: `${y}px`, left: `${x}px`};
  };

  const bottomRightStyle = (x,y) => {
    return {bottom: `${y}px`, right: `${x}px`};
  };

  // position menu depending on position of mouse
  const menuPosition = (relX,relY,mouseAndPage) => {
    let x = mouseAndPage.x;
    let y = mouseAndPage.y;
    let pageWidth = mouseAndPage.pageWidth;
    let pageHeight = mouseAndPage.pageHeight;
    let headerHeight = mouseAndPage.headerHeight;
    if (relX <= 50 && relY <=50) {
      return topLeftStyle(x,y-headerHeight);
    } else if (relX >= 50 && relY <= 50) {
      return topRightStyle(pageWidth - x,y-headerHeight);
    } else if (relX <= 50 && relY >= 50) {
      return bottomLeftStyle(x,pageHeight - y);
    } else {
      return bottomRightStyle(pageWidth - x,pageHeight - y);
    }
  }

  // if the coordinates of the user's click match the coordinates of the character chosen by the user, change state of
  // of the character so that the clicked status becomes true
  const changeClickStatus = (character) => {
    const fetchData = async () => {
      const data = await getCharacters();
      return data;
    };
    fetchData().then(
      function(value) {
        
      }
    )

    character.coordinatesList.forEach(coordinates => {

      if (coordinates.relX == props.relativeCoordinates.relX && coordinates.relY == props.relativeCoordinates.relY) {
        props.changeParentCharactersClickedState(character);
      };
    });
    props.toggleFunc();
  }

  return (
    <>
      {props.toggle && (
        <div className='clickMenuImgsContainer' style={menuPosition(props.relativeCoordinates.relX,props.relativeCoordinates.relY,props.coordinates)}>
          <button onClick={() => changeClickStatus(props.characters.easyCharacter)}>
            <img src={props.characters.easyCharacter.image} alt="Bowser" className='headerCharacterImage' />
          </button>
          <button onClick={() => changeClickStatus(props.characters.mediumCharacter)}>
            <img src={props.characters.mediumCharacter.image} alt="Yubaba" className='headerCharacterImage' />
          </button>
          <button onClick={() => changeClickStatus(props.characters.hardCharacter)}>
            <img src={props.characters.hardCharacter.image} alt="The Knight" className='headerCharacterImage' />
          </button>
        </div>
      )}
    </>
  )
}

export default ClickMenu;