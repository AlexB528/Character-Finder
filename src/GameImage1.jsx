import React, {useState, useRef} from 'react';
import './styles/style.css';
import TheLocNar from './assets/the-loc-nar.jpg';
import ClickMenu from "./ClickMenu.jsx";

function GameImage1(props) {

  const [toggle, setToggle] = useState(false)
  const [coordinates, setCoordinates] = useState({})
  const [relativeCoordinates, setRelativeCoordinates] = useState({})
  
  //imgRef variable allows access to main image (the one where the user has to find the characters)
  const imgRef = useRef();

  // get relative coordinates (percentage of image dimensions)
  const getCoordinates = (e) => {
    let body = document.body;
    let html = document.documentElement;
    let pageWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    setCoordinates({'x': e.pageX, 'y': e.pageY, 'pageWidth': pageWidth, 'pageHeight': pageHeight, 'headerHeight': pageHeight-imgRef.current.height}); //this state is only needed for purposes of position the click menu
    let x = e.pageX - (pageWidth-imgRef.current.width);
    let y = e.pageY - (pageHeight-imgRef.current.height);
    let relX = Math.round((x / imgRef.current.width)*100);
    let relY = Math.round((y / imgRef.current.height)*100);
    setRelativeCoordinates({'relX': relX, 'relY':relY})
  }

  // change toggle state, which will determine whether the ClickMenu is displayed
  const toggleFunc = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  //handleClick will open up a menu and allow user to make a selection
  const handleClick = (e) => {
    getCoordinates(e);
    toggleFunc();
  }



  return (
    <div className='parentDiv'>
      <img onClick={handleClick} ref={imgRef} src={TheLocNar} alt="TheLocNar" className='GameImage' />
      {toggle && <ClickMenu toggle={toggle} toggleFunc={toggleFunc} characters={props.characters} coordinates={coordinates} relativeCoordinates={relativeCoordinates} changeParentCharactersClickedState={props.changeParentCharactersClickedState}/>}
    </div>
  );
}

export default GameImage1;

// the below code was used to get the coordinates for the characters. I will want to use this code again
// if I add more characters. Basically I had to hover my mouse over the character (carefully so as not to
// go outside of character), which created an array of coordinate objects. I then removed the duplicates
// from this array and saved that object in the characterCoordinates.js file.


// import {longCoordinates} from './tempCoordinates.js';
// import { removeDuplicates } from './utilities'; //part of getting coordinates


// let coordinatesNoDuplicates = removeDuplicates(longCoordinates);

// let clicked = false;

// document.onclick = function(e){
//   if (clicked == false) {
//     clicked = true;
//   } else {
//     clicked = false;
//   }
//   let body = document.body;
//   let html = document.documentElement;
//   let pageWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
//   let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
//   let nonRelX = e.pageX - (pageWidth-imgRef.current.width);
//   let nonRelY = e.pageY - (pageHeight-imgRef.current.height);
//   let relX = Math.round((nonRelX / imgRef.current.width)*100);
//   let relY = Math.round((nonRelY / imgRef.current.height)*100);
//   console.log('relX:'+relX+', relY:'+relY);
//   console.log('longCoordinates length is ' + longCoordinates.length + '. Yay!');
//   console.log('no duplicates length is ' + coordinatesNoDuplicates.length + '. Yay!');
//   console.log(coordinatesNoDuplicates);
// }

// let coordinates = [];


// document.onmousemove = function(e){
//   if (clicked == true) {
//     let body = document.body;
//     let html = document.documentElement;
//     let pageWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
//     let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
//     let nonRelX = e.pageX - (pageWidth-imgRef.current.width);
//     let nonRelY = e.pageY - (pageHeight-imgRef.current.height);
//     let relX = Math.round((nonRelX / imgRef.current.width)*100);
//     let relY = Math.round((nonRelY / imgRef.current.height)*100);
//     coordinates.push({x:relX,y:relY})
//     console.log(coordinates);
//   }
// };
