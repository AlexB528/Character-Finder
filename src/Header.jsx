import React from 'react';
import './styles/style.css';
import Timer from './Timer.jsx'

function Header (props) {

  return (
    <div className={"headerFlexContainer"}>
        <div className={"headerImageChild " + (props.characters.easyCharacter.clicked ? "clicked" : "notClicked")}>
            <div>{props.characters.easyCharacter.name}</div>
            <img src={props.characters.easyCharacter.image} alt="Bowser" className='headerCharacterImage' />
        </div>
        <div className={"headerImageChild " + (props.characters.mediumCharacter.clicked ? "clicked" : "notClicked")}>
            <div>{props.characters.mediumCharacter.name}</div>
            <img src={props.characters.mediumCharacter.image} alt="The Knight" className='headerCharacterImage' />
        </div>
        <div className={"headerImageChild " + (props.characters.hardCharacter.clicked ? "clicked" : "notClicked")}>
            <div>{props.characters.hardCharacter.name}</div>
            <img src={props.characters.hardCharacter.image} alt="Yubaba" className='headerCharacterImage' />
        </div>
        <Timer success={props.success}/>
    </div>
  );
}

export default Header;
